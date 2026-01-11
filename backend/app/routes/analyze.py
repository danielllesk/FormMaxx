import os
import json
import time
import tempfile
from flask import Blueprint, request, jsonify
import google.generativeai as genai
from app.config import Config

bp = Blueprint('analyze', __name__)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in Config.ALLOWED_EXTENSIONS

def build_gemini_prompt(exercise: dict) -> str:
    valid_muscles_str = ', '.join(Config.VALID_MUSCLES)
    
    name = exercise.get('name', 'Unknown Exercise')
    description = exercise.get('description', '')
    instructions = exercise.get('instructions', [])
    target_muscles = exercise.get('target_muscles', [])
    plane_of_movement = str(exercise.get('plane_of_movement', '')).lower()
    limiting_factors = exercise.get('limiting_factors', [])
    
    instructions_text = ""
    if isinstance(instructions, list):
        for i, instruction in enumerate(instructions, 1):
            instructions_text += f"{i}. {instruction}\n"
    else:
        instructions_text = str(instructions)
    
    target_muscles_str = ', '.join(target_muscles) if isinstance(target_muscles, list) else str(target_muscles)
    limiting_factors_str = ', '.join(limiting_factors) if isinstance(limiting_factors, list) else str(limiting_factors)
    
    prompt = f"""You are a certified strength and conditioning coach with expert-level knowledge of human biomechanics, anatomy, and exercise technique.

The user is performing the following exercise. Use this information as the authoritative reference for correct technique and muscle engagement.

Exercise name: {name}

Description:
{description}

Instructions:
{instructions_text}

Intended target muscles:
{target_muscles_str}

Plane of movement:
{plane_of_movement}

Common limiting factors:
{limiting_factors_str}

You are given a short video (≤10 seconds) of the user performing this exercise.

Your task is to evaluate the user's movement quality by comparing the video against the intended exercise mechanics described above.

Use qualitative biomechanical reasoning based on:
- Joint motion consistency with the plane of movement
- Stability vs momentum
- Whether load stays on the intended target muscles
- Whether common limiting factors appear to be influencing technique

DO NOT perform pose estimation or numerical measurements.
Reason as a human coach would.

---

ANALYSIS OBJECTIVES:

1. FORM RATING  
Rate the user's form on a scale from 0 to 10, where:
- 10 = excellent form, optimal muscle targeting, no visible compensation
- 7–9 = generally good form with minor inefficiencies
- 4–6 = noticeable compensations reducing target muscle engagement
- 0–3 = poor or unsafe form

2. MUSCLE ENGAGEMENT ANALYSIS  
Using biomechanical cause-and-effect reasoning, determine which muscles are:

- CORRECTLY ENGAGED: List ONLY the PRIMARY target muscles that are actively and appropriately contributing to the movement as intended. Do NOT list stabilizing muscles that are just passively engaged unless they are specifically required for this exercise.

- UNDERACTIVE: List muscles from the target list that should be working but appear weak, disengaged, or not contributing enough. These are muscles that should be active but aren't.

- OVERACTIVE/COMPENSATING: List muscles that are working too hard, taking over, or compensating for weak target muscles. These often include muscles that shouldn't be primary movers in this exercise (e.g., shoulders compensating for weak biceps, or lower back compensating for weak core).

CRITICAL: For isolated exercises (like preacher curls, bicep curls), ONLY the primary target muscles should be in "correct". Stabilizers like core, lats, or back muscles should typically be in "overactive" if they're engaging, or not listed at all if they're appropriately minimal.

ONLY use muscle names from this list:
{valid_muscles_str}

3. CAUSAL EXPLANATION  
Explain muscle engagement based on movement mechanics, for example:
- How sway, posture, or joint positioning shifts load away from the target muscles
- Why compensating muscles activate in response to instability or weak engagement
- Why target muscles might be underactive (poor form, momentum, compensation patterns)

4. COACHING FEEDBACK  
Provide 2–3 short, actionable coaching cues that directly correct the biomechanical issues you identified.

---

OUTPUT FORMAT REQUIREMENTS:

Return your response STRICTLY in the following JSON format and nothing else:

{{
  "rating": number (integer from 0 to 10),
  "summary": "One concise sentence summarizing form quality and muscle engagement.",
  "feedback": [
    "One-sentence actionable coaching cue",
    "One-sentence actionable coaching cue"
  ],
  "muscle_analysis": {{
    "correct": ["muscle_name"],
    "underactive": ["muscle_name"],
    "overactive": ["muscle_name"]
  }}
}}

IMPORTANT CONSTRAINTS:
- Do not invent or reference muscles outside the provided list.
- Do not include the same muscle in more than one category.
- Be CRITICAL: For isolated exercises, list ONLY primary target muscles in "correct". Stabilizers should be in "overactive" if they're engaging, or omitted entirely.
- DO NOT list stabilizing muscles (core, back, shoulders, etc.) as "correct" unless they are specifically required primary movers for this exercise.
- If NO muscles are overactive or underactive, you may leave those arrays empty, but be thorough - most form issues involve some compensation.
- If uncertain, choose the most biomechanically plausible explanation.
"""
    return prompt


def validate_and_clean_response(gemini_response: dict, target_muscle: str) -> dict:
    try:
        rating = gemini_response.get('rating', 6)
        rating = min(max(float(rating), 0), 10)
        rating = int(rating) if rating == int(rating) else round(rating, 1)
        
        summary = gemini_response.get('summary', 'Form analysis completed.')
        feedback = gemini_response.get('feedback', [])
        if not isinstance(feedback, list):
            feedback = []
        
        muscle_analysis = gemini_response.get('muscle_analysis', {})
        if not isinstance(muscle_analysis, dict):
            muscle_analysis = {}
        
        correct = muscle_analysis.get('correct', [])
        underactive = muscle_analysis.get('underactive', [])
        overactive = muscle_analysis.get('overactive', [])
        if not isinstance(correct, list):
            correct = []
        if not isinstance(underactive, list):
            underactive = []
        if not isinstance(overactive, list):
            overactive = []
        
        valid_muscles_set = set(Config.VALID_MUSCLES)
        correct = list(set([m for m in correct if m in valid_muscles_set]))
        underactive = list(set([m for m in underactive if m in valid_muscles_set]))
        overactive = list(set([m for m in overactive if m in valid_muscles_set]))

        seen = set()
        
        final_overactive = []
        for muscle in overactive:
            if muscle not in seen:
                final_overactive.append(muscle)
                seen.add(muscle)
        
        final_underactive = []
        for muscle in underactive:
            if muscle not in seen:
                final_underactive.append(muscle)
                seen.add(muscle)
        
        final_correct = []
        for muscle in correct:
            if muscle not in seen:
                final_correct.append(muscle)
                seen.add(muscle)
        
        correct = final_correct
        underactive = final_underactive
        overactive = final_overactive
        
        return {
            'rating': rating,
            'summary': str(summary),
            'feedback': [str(f) for f in feedback[:5]], 
            'muscle_analysis': {
                'correct': correct,
                'underactive': underactive,
                'overactive': overactive
            }
        }
    
    except Exception as e:
        return None


def get_error_response(error_type: str, details: str = None) -> tuple:
    error_messages = {
        'video_upload_failed': 'Failed to upload video to analysis service. Please try again.',
        'api_error': 'Analysis service is currently unavailable. Please try again later.',
        'invalid_response': 'Received invalid response from analysis service. Please try again.',
        'timeout': 'Analysis timed out. Please try again with a shorter video.',
        'unknown': 'Unable to analyze video. Please try again.'
    }
    
    message = error_messages.get(error_type, error_messages['unknown'])
    if details:
        message += f' Details: {details}'
    
    return jsonify({
        'error': message,
        'error_type': error_type
    }), 500


@bp.route('/analyze', methods=['POST'])
def analyze():
    try:
        if 'video' not in request.files:
            return jsonify({'error': 'No video file provided'}), 400
        
        video_file = request.files['video']
        if video_file.filename == '':
            return jsonify({'error': 'No file selected'}), 400
        
        if not allowed_file(video_file.filename):
            return jsonify({
                'error': f'Invalid file type. Allowed: {", ".join(Config.ALLOWED_EXTENSIONS)}'
            }), 400
        
        exercise_json_str = request.form.get('exercise', '')
        
        if not exercise_json_str and request.is_json:
            json_data = request.get_json()
            if json_data and 'exercise' in json_data:
                exercise_data = json_data['exercise']
            else:
                exercise_data = json_data
        else:
            try:
                exercise_data = json.loads(exercise_json_str) if exercise_json_str else None
            except json.JSONDecodeError:
                return jsonify({'error': 'Invalid exercise JSON format'}), 400
        
        if not exercise_data:
            return jsonify({'error': 'Exercise data is required'}), 400
        
        if not isinstance(exercise_data, dict):
            return jsonify({'error': 'Exercise must be a JSON object'}), 400
        
        if 'name' not in exercise_data:
            return jsonify({'error': 'Exercise name is required'}), 400
        

        target_muscles = exercise_data.get('target_muscles', [])
        
        if isinstance(target_muscles, list):
            mapped_muscles = [Config.map_muscle_to_valid(m) for m in target_muscles]
            seen = set()
            mapped_muscles = [m for m in mapped_muscles if m not in seen and not seen.add(m)]
            exercise_data['target_muscles'] = mapped_muscles
            target_muscle = mapped_muscles[0] if mapped_muscles else 'hamstrings'
        elif isinstance(target_muscles, str):
            target_muscle = Config.map_muscle_to_valid(target_muscles)
            exercise_data['target_muscles'] = [target_muscle]
        else:
            target_muscle = 'hamstrings'
            exercise_data['target_muscles'] = [target_muscle]
        
        target_muscle_normalized = str(target_muscle).lower().replace(' ', '_')
        target_muscle = target_muscle_normalized
        
        valid_muscles_set = set(Config.VALID_MUSCLES)
        if target_muscle not in valid_muscles_set:

            target_muscle = 'hamstrings'
            if 'target_muscles' in exercise_data:
                exercise_data['target_muscles'] = [
                    m for m in exercise_data['target_muscles'] 
                    if m in valid_muscles_set
                ] or ['hamstrings']
        
        if not Config.GEMINI_API_KEY:
            return jsonify({
                'error': 'Gemini API key not configured. Set GEMINI_API_KEY environment variable.'
            }), 500
        
        genai.configure(api_key=Config.GEMINI_API_KEY)
        
        temp_video_path = None
        video_file_gemini = None
        try:
            temp_fd, temp_video_path = tempfile.mkstemp(
                suffix='.' + video_file.filename.rsplit('.', 1)[1].lower(),
                dir=Config.UPLOAD_FOLDER
            )
            video_file.save(temp_video_path)
            os.close(temp_fd)
            
            prompt = build_gemini_prompt(exercise_data)
            
            model = genai.GenerativeModel(Config.GEMINI_MODEL)
            
            video_file_gemini = genai.upload_file(path=temp_video_path)

            max_wait_time = 30  
            wait_time = 0
            while video_file_gemini.state.name == "PROCESSING" and wait_time < max_wait_time:
                time.sleep(2)
                wait_time += 2
                video_file_gemini = genai.get_file(video_file_gemini.name)
            
            if video_file_gemini.state.name == "FAILED":
                error_msg = "Video file upload to analysis service failed"
                if hasattr(video_file_gemini, 'error'):
                    error_msg += f": {video_file_gemini.error}"
                return get_error_response('video_upload_failed', error_msg)
            
            response = model.generate_content(
                [video_file_gemini, prompt]
            )
            
            response_text = response.text.strip()
            
            if '```json' in response_text:
                response_text = response_text.split('```json')[1].split('```')[0].strip()
            elif '```' in response_text:
                response_text = response_text.split('```')[1].split('```')[0].strip()
            
            gemini_response = json.loads(response_text)
            
            cleaned_response = validate_and_clean_response(gemini_response, target_muscle)
            
            if cleaned_response is None:
                return get_error_response('invalid_response', 'Analysis response validation failed')
            
            return jsonify(cleaned_response), 200
        
        except json.JSONDecodeError as e:
            print(f"JSON decode error: {e}")
            print(f"Response text: {response_text if 'response_text' in locals() else 'N/A'}")
            return get_error_response('invalid_response', 'Unable to parse analysis response')
        
        except Exception as e:
            error_msg = str(e)
            print(f"Gemini API error: {type(e).__name__}: {error_msg}")
            import traceback
            traceback.print_exc()
            
            if 'upload' in error_msg.lower() or 'file' in error_msg.lower():
                error_type = 'video_upload_failed'
            elif 'timeout' in error_msg.lower():
                error_type = 'timeout'
            else:
                error_type = 'api_error'
            
            return get_error_response(error_type, error_msg)
        
        finally:
            if temp_video_path and os.path.exists(temp_video_path):
                try:
                    os.remove(temp_video_path)
                except Exception:
                    pass
            
            try:
                if video_file_gemini:
                    genai.delete_file(video_file_gemini.name)
            except Exception:
                pass
    
    except Exception as e:
        return jsonify({
            'error': f'Internal server error: {str(e)}'
        }), 500
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') 
    
    GEMINI_API_KEY = os.environ.get('GEMINI_API_KEY')
    GEMINI_MODEL = 'gemini-2.5-flash'  # Using flash model for free tier compatibility
    
    MAX_CONTENT_LENGTH = 100 * 1024 * 1024
    UPLOAD_FOLDER = '/tmp/formmaxx_uploads'
    ALLOWED_EXTENSIONS = {'mp4', 'mov', 'avi', 'webm', 'mkv'}
    
    GEMINI_TIMEOUT = 120  # Increased timeout for video analysis (2 minutes)
    
    VALID_MUSCLES = [
        "biceps",
        "triceps",
        "shoulders",
        "chest",
        "abdomen",
        "quandriceps",
        "hamstrings",
        "calves",
        "glutes",
        "forearms",
        "lats",
        "traps",
        "upper back"
    ]
    
    MUSCLE_MAPPING = {
        "biceps_brachii": "biceps",
        "biceps": "biceps",
        "brachialis": "biceps",
        "brachioradialis": "forearms",
        
        "triceps_brachii": "triceps",
        "triceps": "triceps",
        
        "deltoids": "shoulders",
        "deltoid": "shoulders",
        "lateral_deltoids": "shoulders",
        "lateral_delt": "shoulders",
        "rear_delts": "shoulders",
        "rear_delt": "shoulders",
        "shoulders": "shoulders",
        
        "pectorals": "chest",
        "pectoralis major": "chest",
        "pectoralis": "chest",
        "upper pectorals": "chest",
        "chest": "chest",
        
        "rectus_abdominis": "abdomen",
        "transverse abdominis": "abdomen",
        "obliques": "abdomen",
        "lower abs": "abdomen",
        "abs": "abdomen",
        "abdomen": "abdomen",
        "core": "abdomen",
        
        "quadriceps": "quandriceps",
        "quads": "quandriceps",
        "quandriceps": "quandriceps",
        
        "hamstrings": "hamstrings",
        "hams": "hamstrings",
        

        "gastrocnemius": "calves",
        "soleus": "calves",
        "calves": "calves",
        "calf": "calves",
        

        "gluteus_maximus": "glutes",
        "glutes": "glutes",
        "glute": "glutes",


        "forearms": "forearms",
        "forearm": "forearms",
        "forearm flexors": "forearms",
        

        "latissimus_dorsi": "lats",
        "lats": "lats",
        "lat": "lats",
        
        "trapezius": "traps",
        "upper trapezius": "traps",
        "traps": "traps",
        "trap": "traps",
        "rhomboids": "upper back",
        "upper back": "upper back",
        "mid traps": "upper back",
        
        "lower back": "upper_back",
        "erector spinae": "upper back"
    }
    
    @staticmethod
    def map_muscle_to_valid(muscle_name: str) -> str:
        normalized = str(muscle_name).lower().replace(' ', '_').strip()
        
        normalized = normalized.split('(')[0].strip()
        
        if normalized in Config.MUSCLE_MAPPING:
            return Config.MUSCLE_MAPPING[normalized]
        
        for key, value in Config.MUSCLE_MAPPING.items():
            if key in normalized or normalized in key:
                return value
            return normalized
    
    @staticmethod
    def format_muscle_for_display(muscle_name: str) -> str:
        """Convert muscle name from internal format (e.g., 'upper_back') to display format (e.g., 'Upper Back')."""
        if not muscle_name:
            return muscle_name
        
        # Replace underscores with spaces and capitalize each word
        formatted = muscle_name.replace('_', ' ').title()
        return formatted


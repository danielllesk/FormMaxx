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
        "upper_back"
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
        "pectoralis_major": "chest",
        "pectoralis": "chest",
        "upper_pectorals": "chest",
        "chest": "chest",
        
        "rectus_abdominis": "abdomen",
        "transverse_abdominis": "abdomen",
        "obliques": "abdomen",
        "lower_abs": "abdomen",
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
        "forearm_flexors": "forearms",
        

        "latissimus_dorsi": "lats",
        "lats": "lats",
        "lat": "lats",
        
        "trapezius": "traps",
        "upper_trapezius": "traps",
        "traps": "traps",
        "trap": "traps",
        "rhomboids": "upper_back",
        "upper_back": "upper_back",
        "mid_traps": "upper_back",
        
        "lower_back": "upper_back",
        "erector_spinae": "upper_back"
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


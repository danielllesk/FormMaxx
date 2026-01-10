import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') 
    
    GEMINI_API_KEY = os.environ.get('GEMINI_API_KEY')
    GEMINI_MODEL = 'gemini-2.5-pro'
    
    MAX_CONTENT_LENGTH = 100 * 1024 * 1024
    UPLOAD_FOLDER = '/tmp/formmaxx_uploads'
    ALLOWED_EXTENSIONS = {'mp4', 'mov', 'avi', 'webm', 'mkv'}
    
    GEMINI_TIMEOUT = 30
    
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


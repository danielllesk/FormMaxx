from flask import Flask
from flask_cors import CORS
from app.config import Config
from app.extensions import init_app


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    
    # Configure CORS to allow all origins and methods
    CORS(app, 
         origins="*",
         methods=["GET", "POST", "OPTIONS"],
         allow_headers=["Content-Type", "Authorization"],
         supports_credentials=False)
    
    init_app(app)
    
    from app.routes import health, analyze
    app.register_blueprint(health.bp)
    app.register_blueprint(analyze.bp)
    
    import os
    os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
    
    return app


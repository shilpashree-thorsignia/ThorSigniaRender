from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os
import logging
import urllib.parse
import time

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(name)s: %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
)
logger = logging.getLogger(__name__)

# Load environment variables from .env file
load_dotenv()

# Initialize SQLAlchemy
db = SQLAlchemy()

def create_app():
    """Initialize the core application."""
    app = Flask(__name__, static_folder='../dist', static_url_path='/')
    
    # Configure security settings
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', os.urandom(24).hex())
    app.config['SESSION_COOKIE_SECURE'] = os.getenv('FLASK_ENV') == 'production'
    app.config['SESSION_COOKIE_HTTPONLY'] = True
    app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'
    app.config['PERMANENT_SESSION_LIFETIME'] = 3600  # 1 hour
    
    # Configure CORS with specific origins
    CORS(app, resources={
        r"/*": {
            "origins": [
                "http://localhost:5000",
                "http://127.0.0.1:5000",
                "http://localhost:3000",
                "http://127.0.0.1:3000",
                "https://www.thorsignia.in",
                "https://thorsignia-api.onrender.com",
                "https://thorsignia-frontend.onrender.com"
            ],
            "methods": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
            "allow_headers": ["Content-Type", "Authorization", "X-Requested-With"],
            "supports_credentials": True
        }
    })

    # Database Configuration
    try:
        # Only use DATABASE_URL for PostgreSQL
        database_url = os.getenv('DATABASE_URL')
        if not database_url:
            raise Exception("DATABASE_URL environment variable is not set.")
        # Convert postgres:// to postgresql:// if necessary (for Render)
        if database_url.startswith('postgres://'):
            database_url = database_url.replace('postgres://', 'postgresql://', 1)
        logger.info("Using DATABASE_URL for connection")
        app.config['SQLALCHEMY_DATABASE_URI'] = database_url
        app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
        app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {
            'pool_size': 10,
            'pool_recycle': 60,
            'pool_pre_ping': True
        }
        db.init_app(app)
        with app.app_context():
            try:
                db.init_app(app)
                logger.info("Ensuring all tables exist in the database...")
                from app.models.contact import Contact
                from app.models.career_application import CareerApplication
                db.create_all()
                inspector = db.inspect(db.engine)
                tables = inspector.get_table_names()
                logger.info(f"Available tables in database: {tables}")
                if not tables:
                    logger.error("No tables found after creation!")
                    raise Exception("Failed to create database tables")
                if os.getenv('FLASK_ENV') != 'production':
                    pass
                else:
                    logger.info("Production mode: Skipping test data creation")
            except Exception as e:
                logger.error(f"Database initialization error: {str(e)}")
                raise
            try:
                db.engine.connect()
                logger.info("Successfully connected to the database!")
            except Exception as e:
                logger.error(f"Database connection error: {str(e)}")
                raise
    except Exception as e:
        logger.error(f"Database configuration error: {str(e)}")
        raise
    with app.app_context():
        from app.routes import contacts
        app.register_blueprint(contacts.bp)
        from api.index import api_bp
        app.register_blueprint(api_bp)
        @app.route('/api/health')
        def health_check():
            try:
                db.engine.connect()
                db_status = 'connected'
            except Exception as e:
                logger.error(f"Database health check failed: {str(e)}")
                db_status = 'disconnected'
            return {
                'status': 'ok' if db_status == 'connected' else 'warning',
                'message': 'Thor Signia API is running',
                'database': db_status,
                'environment': os.getenv('FLASK_ENV', 'development'),
                'timestamp': time.time()
            }
        @app.route('/api/init-db', methods=['POST'])
        def init_db():
            try:
                from app.models.contact import Contact
                from app.models.career_application import CareerApplication
                db.create_all()
                inspector = db.inspect(db.engine)
                tables = inspector.get_table_names()
                logger.info(f"/api/init-db: Tables now in database: {tables}")
                return {'status': 'ok', 'tables': tables}, 200
            except Exception as e:
                logger.error(f"/api/init-db error: {str(e)}")
                return {'status': 'error', 'message': str(e)}, 500
    return app 
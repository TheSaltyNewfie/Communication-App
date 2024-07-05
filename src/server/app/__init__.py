from flask import Flask
from flask_cors import CORS, cross_origin
import os

def isDatabaseValid():
    if os.path.exists('data.db'):
        return True
    else:
        return False

def create_app():
    app = Flask(__name__)
    cors = CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'

    if not isDatabaseValid():
        os.system('./generateDB.sh')
        print("Made database")

    with app.app_context():
        from .controllers import User, Messages, Conversations

    return app
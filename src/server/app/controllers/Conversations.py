from flask import current_app as app, request, jsonify
from app.utils.database import Database
from app.utils.security import hashPassword, generateToken, checkPassword

@app.route("/conversations/create", methods=['POST'])
def createConversation():
    data = request.get_json()
    name = data.get('name')

    Database('app/data.db').execute('insert into Conversations (name) values (?)', name)

    return jsonify({'message': 'created conversation'})

@app.route("/conversation/<name>", methods=['GET'])
def getConversation(name):
    result = Database('app/data.db').execute('select conversation_id from Conversations where name = ?', name)
    return jsonify({'message': result[0][0]})
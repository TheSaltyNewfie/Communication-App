from flask import current_app as app, request, jsonify
from app.utils.database import Database
from app.utils.security import hashPassword, generateToken, checkPassword

@app.route("/messages/<conversation>", methods=['GET'])
def getConversationMessages(conversation):
    result = Database('app/data.db').execute('SELECT content, message_id, sent_at, sender_id FROM Messages where conversation_id = ?', conversation)

    obj = []

    for message in result:
        user = Database('app/data.db').execute('select username from Users where user_id = ?', message[3])
        obj.append({
                "content": message[0],
                "message_id": message[1],
                "sent_at": message[2],
                "sender": user[0][0]
            }
        )

    return jsonify(obj)

@app.route("/messages/create", methods=['POST'])
def createMessage():
    data = request.get_json()
    conversation_id = data.get('conversation_id')
    sender_id = data.get('sender_id')
    content = data.get('content')

    message = Database('app/data.db').execute('insert into Messages (conversation_id, sender_id, content) values (?, ?, ?)', conversation_id, sender_id, content)

    return jsonify({'message': 'created message'})
from flask import current_app as app, request, jsonify
from app.utils.database import Database
from app.utils.security import hashPassword, generateToken, checkPassword

@app.route("/users/create", methods=['POST'])
def createUser():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    token = generateToken(32)

    password_hash = hashPassword(password)

    Database('app/data.db').execute(f'insert into Users (username, email, password_hash, token) VALUES (?, ?, ?, ?)', username, email, password_hash, token)

    return jsonify({'message': token})

@app.route("/users/authenticate", methods=['POST'])
def authenticateUser():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    password_hash = hashPassword(password)
    print(password_hash)

    user = Database('app/data.db').execute('SELECT * FROM Users WHERE username = ?', username)

    isUser = checkPassword(password, user[0][3])

    token = generateToken(32)

    user_updated = Database('app/data.db').execute('UPDATE Users SET token = ? WHERE username = ?', token, username)
    
    if isUser:
        return jsonify({'token': token}), 200
    else:
        return jsonify({'message': 'failed'}), 401


@app.route("/users/<id>", methods=['GET'])
def getUsers(id):
    users = Database('app/data.db').execute('select username, email from Users where user_id = ?', id)

    obj = {
        "username": users[0][0],
        "email": users[0][1]
    }

    return jsonify(obj)

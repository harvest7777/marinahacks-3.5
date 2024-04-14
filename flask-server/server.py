from flask import Flask, request, jsonify
from flask_socketio import SocketIO, join_room, leave_room

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins='*')

# Chat history organized by room
chat_history = {}

@app.route("/send-message", methods=["POST"])
def send_message():
    data = request.json
    room = data.get('room')
    timestamp = data.get('timestamp')
    username = data.get('username')
    message = data.get('message')
    chat_message_string = f"{timestamp} - {username}: {message}"
    
    # Append message to the room's history
    if room not in chat_history:
        chat_history[room] = []
    chat_history[room].append(chat_message_string)
    
    # Emit message to only users in the room
    socketio.emit('new_message', {'message': chat_message_string}, room=room)
    return jsonify(success=True)

@app.route("/join", methods=["POST"])
def join():
    data = request.json
    username = data.get('username')
    room = data.get('room')
    
    # Join the room
    join_room(room)
    join_message_string = f"{username} has joined the room {room}"
    socketio.emit('join_message', {'message': join_message_string}, room=room)
    return jsonify(success=True)

@app.route("/leave", methods=["POST"])
def leave():
    data = request.json
    username = data.get('username')
    room = data.get('room')
    
    # Leave the room
    leave_room(room)
    leave_message_string = f"{username} has left the room {room}"
    socketio.emit('leave_message', {'message': leave_message_string}, room=room)
    return jsonify(success=True)

@app.route("/view-messages")
def view_messages():
    room = request.args.get('room')
    return jsonify(chat_history.get(room, []))

@socketio.on('connect')
def handle_connect():
    print('Client connected')

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')

if __name__ == "__main__":
    socketio.run(app, debug=True)

from flask import Flask, request, jsonify
from flask_socketio import SocketIO, join_room, leave_room

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins='*')
chat_history = {}  # Dictionary to store messages by room
connected_clients = 0

@app.route("/send-message", methods=["POST"])
def send_message():
    data = request.json
    room = data.get('room')
    username = data.get('username')
    message = data.get('message')
    timestamp = data.get('timestamp')
    chat_message_string = f"{timestamp} - {username}: {message}"
    
    # Storing message in room-specific history
    if room not in chat_history:
        chat_history[room] = []
    chat_history[room].append(chat_message_string)
    
    socketio.emit('new_message', {'message': chat_message_string}, room=room)
    return jsonify(success=True)

@app.route("/join", methods=["POST"])
def join():
    data = request.json
    username = data.get('username')
    room = data.get('room')
    join_message_string = f"{username} has joined the room {room}"
    
    join_room(room)
    socketio.emit('join_message', {'message': join_message_string}, room=room)
    return jsonify(success=True)

@app.route("/leave", methods=["POST"])
def leave():
    data = request.json
    username = data.get('username')
    room = data.get('room')
    leave_message_string = f"{username} has left the room {room}"
    
    leave_room(room)
    socketio.emit('leave_message', {'message': leave_message_string}, room=room)
    return jsonify(success=True)

@app.route("/view-messages")
def view_messages():
    room = request.args.get('room')
    return jsonify(chat_history.get(room, []))

@socketio.on('connect')
def handle_connect():
    global connected_clients
    connected_clients += 1
    # Emitting to all clients, consider only updating specific admin or monitoring panels if necessary
    socketio.emit('user_count', {'count': connected_clients})

@socketio.on('disconnect')
def handle_disconnect():
    global connected_clients
    connected_clients -= 1
    # Emitting to all clients, consider only updating specific admin or monitoring panels if necessary
    socketio.emit('user_count', {'count': connected_clients})

if __name__ == "__main__":
    socketio.run(app, debug=True)

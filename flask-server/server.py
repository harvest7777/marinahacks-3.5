from flask import Flask, request, jsonify
from flask_socketio import SocketIO

# This initializes your sql app. This class is used to send sql queries to the databse
app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins='*')
chat_history = []
connected_clients = 0
# This is the default api endpoint (https://localhost/)


@app.route("/")
def home():
    # JSON data returned from endpoint
    return {0: "no data to be seen here!"}


# This is the testing endpoint to make sure the sql queries are being sent (https://localhost/test)
@app.route("/test")
def test():
    return {1: "hello world"}


@app.route("/submit-username", methods=["GET", "POST"])
def submit_username():
    return "This is supposed to be used through a react component to submit a username"


@app.route("/send-message", methods=["GET", "POST"])
def send_message():
    if request.method == "POST":
        data = request.json
        timestamp = data.get('timestamp')
        username = data.get('username')
        message = data.get('message')
        chat_message_string = f"{timestamp} - {username}: {message}"
        chat_history.append(chat_message_string)
    socketio.emit('new_message', {
                  'message': chat_message_string})
    return "This is supposed to be used through a react component to submit a username"


@app.route("/join", methods=["GET", "POST"])
def join():
    if request.method == "POST":
        data = request.json
        username = data.get('username')
        join_message_string = username + " has joined the room"
        socketio.emit('join_message', {'message': join_message_string})
    return "hello"


@app.route("/leave", methods=["GET", "POST"])
def leave():
    if request.method == "POST":
        data = request.json
        username = data.get('username')
        leave_message_string = username + " has left the room"
        print("\n\n\n")

        print(leave_message_string)
        socketio.emit('leave_message', {'message': leave_message_string})
    return "hello"


@app.route("/view-messages")
def view_messages():
    return jsonify(chat_history)


@socketio.on('connect')
def handle_connect():
    global connected_clients
    print('Client connected')
    connected_clients += 1
    socketio.emit('user_count', {'count': connected_clients})
    socketio.emit('connected_user')


@socketio.on('disconnect')
def handle_disconnect():
    global connected_clients
    print('Client disconnected')
    connected_clients -= 1
    socketio.emit('user_count', {'count': connected_clients})
    socketio.emit('disconnected_user')


if __name__ == "__main__":
    socketio.run(app, debug=True)

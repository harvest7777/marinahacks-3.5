from flask import Flask, request, jsonify

# This initializes your sql app. This class is used to send sql queries to the databse
app = Flask(__name__)

chat_history = []

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
        print("Post request received, added " +
              chat_message_string + " to logs!")

    return "This is supposed to be used through a react component to submit a username"


@app.route("/view-messages")
def view_messages():
    return jsonify(chat_history)


if __name__ == "__main__":
    app.run(debug=True)

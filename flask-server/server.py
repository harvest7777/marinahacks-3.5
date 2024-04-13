from flask import Flask, request


# This initializes your sql app. This class is used to send sql queries to the databse
app = Flask(__name__)


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


if __name__ == "__main__":
    app.run(debug=True)

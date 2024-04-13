from flask import Flask, request
from flask_mysqldb import MySQL
import yaml

# Import your user pass with a file named db.yaml
with open("db.yaml", "r") as file:
    db = yaml.load(file, Loader=yaml.Loader)

# This initializes your sql app. This class is used to send sql queries to the databse
app = Flask(__name__)

app.config["MYSQL_HOST"] = db["mysql_host"]
app.config["MYSQL_USER"] = db["mysql_user"]
app.config["MYSQL_PASSWORD"] = db["mysql_password"]
app.config["MYSQL_DB"] = db["mysql_db"]

mysql = MySQL(app)


# This is the default api endpoint (https://localhost/)
@app.route("/")
def home():
    # JSON data returned from endpoint
    return {0: "no data to be seen here!"}


# This is the testing endpoint to make sure the sql queries are being sent (https://localhost/test)
@app.route("/test")
def test():
    # To send a sql query you have to initialize a sql cursor object
    cur = mysql.connection.cursor()
    # Use a sql query in string format as the argument for execute
    cur.execute("INSERT INTO chatrooms(username) VALUES(\"ryan\")")
    # Commit changes
    mysql.connection.commit()
    # Close the cursor
    cur.close()
    return {1: "hello world"}


@app.route("/submit-username", methods=["GET", "POST"])
def submit_username():
    if request.method == "POST":
        username = request.json.get("username")
        print("Post request received! Here's what we got:", username)
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO chatrooms(username) VALUES(%s)", (username,))
        mysql.connection.commit()
        cur.close()
    return "This is supposed to be used through a react component to submit a username"


if __name__ == "__main__":
    app.run(debug=True)

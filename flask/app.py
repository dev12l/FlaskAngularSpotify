from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/hello")
def hello_world():
    data = {
        'title': 'Welcome to Angular-Python App',
        'message': 'This is an example integration between Angular and Python!'
    }
    return(jsonify(data))


app.run()
from flask import Flask
from flask import request
from flask import jsonify
from flask import render_template
app=Flask(__name__)
@app.route("/")
def home():
    return render_template("index1.html")

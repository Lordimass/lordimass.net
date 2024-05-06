from flask import Flask
from flask import send_file
import importlib
import sys

import main

app = Flask(__name__)

@app.route("/")
def hello_world():
    if "main" in sys.modules:
        importlib.reload(main)

    positions = main.RectPacker(width=1920, dir = "../images/art").pack(save=True)
    return send_file("positions.json")
from flask import Flask
from flask import send_file, request
from flask_cors import CORS, cross_origin
from waitress import serve
import importlib
import sys
import os

from subroutines import *
import rectpacker as rectpacker

host = "0.0.0.0"
port = 8080
art_dir = "images/art"

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"

@app.route("/", methods=['POST', 'GET'])
@cross_origin()
def hello_world():
    string_width = request.args.get("width")
    if string_width == None:
        return {}
    width = int(string_width)
    tprint(width)
    if "rectpacker" in sys.modules:
        importlib.reload(rectpacker)

    rectpacker.RectPacker(width=width, dir = art_dir).pack(save=True)
    tprint("Pack recieved, returning json file")
    return send_file("positions.json")

serve(app, host=host, port=port)
print("Server Launched")
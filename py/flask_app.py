from flask import Flask
from flask import send_file, request
from flask_cors import CORS, cross_origin
import importlib
import sys
from subroutines import *

import main

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"

@app.route("/", methods=['POST', 'GET'])
@cross_origin()
def hello_world():
    width = int(request.args.get("width"))
    tprint(width)
    if "main" in sys.modules:
        importlib.reload(main)

    main.RectPacker(width=width, dir = "../images/art").pack(save=True)
    return send_file("positions.json")
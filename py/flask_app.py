from flask import Flask
from flask import send_file, request
from flask_cors import CORS, cross_origin
from waitress import serve
import os
import json

from subroutines import *

host = "0.0.0.0"
port = 8080
open_paths = [
    "images/art"
]

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"

@app.route("/get_file_list", methods=['POST', 'GET'])
@cross_origin()
def get_file_list():
    path = request.args.get("path")
    if path == None:
        return "Please provide a path as an argument"
    elif path not in open_paths:
        return "You either do not have permission to access this path, or it isn't a valid path"
    
    
    try: # Attempt to list the directory
        directory_listing = os.listdir(path)
    except FileNotFoundError: # User provided an invalid path
        return f"No such file or directory: '{path}'"
    
    file_paths = []
    for file in directory_listing:
        file_paths.append(path + "/" + file)

    print(file_paths)
    fp = open("py/paths.json", "w")
    json.dump(file_paths, fp, indent=4)
    fp.close()

    return send_file("paths.json")

serve(app, host=host, port=port)
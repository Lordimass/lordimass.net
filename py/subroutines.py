#################################################################################################

# This file stores subroutines used throughout the code for various purposes

#################################################################################################

import PIL.Image
import discord
import time
import os
import json
from requests import get
from colorama import Back, Fore, Style
import colorsys

def lost_and_found(): # Handling error where the program goes wandering around the disc and forgets its way home. So sad :(
    os.chdir(os.path.dirname(os.path.abspath(__file__)))

def tprint(message: str): # Prints messages with a time stamp prefixing them
    prfx = Back.BLACK + Fore.GREEN + time.strftime("%H:%M:%S UTC", time.gmtime()) + Back.RESET + Fore.WHITE + Style.BRIGHT
    print(prfx + " " + str(message))

def botCount(interaction : discord.Interaction): # Counts the total number of bots in a guild
    members = interaction.guild.members
    bot_count = 0
    for i in members:
        member = i.bot
        if member == True:
            bot_count += 1
    return bot_count

def get_colour_name(colour : str):
    colournames_data = grab_json_from_api(f"https://colornames.org/search/json/?hex={colour}")
    return colournames_data["name"]

def get_word_data(word):
    data = grab_json_from_api(f"https://api.dictionaryapi.dev/api/v2/entries/en/{word}")[0]
    try:
        data["title"]
        return None
    except:
        return data

def grab_json_from_api(url : str):
    response = get(url)
    data = response.text
    return json.loads(data)

def get_json(json_name : str):
    lost_and_found()
    f = open(f"data/{json_name}")
    data = json.load(f)
    f.close()
    return data

def save_json(json_name : str, data):
    lost_and_found()
    f = open(f"data/{json_name}", "w")
    json.dump(data, f, indent=4)
    f.close()

def get_txt(txt_name : str):
    lost_and_found()
    lines = []
    with open(f"data/{txt_name}", "r") as file:
        for line in file:
            lines.append(line)
    return lines

def days_since(timestamp): # Calculates how many full days it has been since a given timestamp
    S = 86400
    epoch_daystamp = timestamp//S
    epoch_todaystamp = time.time()//S
    return epoch_todaystamp - epoch_daystamp

def invert_dict(dictionary:dict):
    return {v: k for k, v in dictionary.items()}
    # https://stackoverflow.com/questions/483666/reverse-invert-a-dictionary-mapping

def remove_file(directory:str): # Attempts to remove a file at a given directory, returns boolean dependent on its success
    try: # Try to remove the given file
        os.remove(directory)
        return True
    except Exception as e: # File may no longer exist, if that's the case just ignore it
        tprint(f"Failed to remove file {directory}: {e}")
        return False

def clear_dir(directory:str): # Completely clears out a given directory, use with caution:
    for file in os.listdir(directory):
        remove_file(os.path.abspath(directory + "/" + file))

def get_balance(userid): # Gets balance data from user's economy file, and creates a file if one doesn't exist for them yet
    data = []
    for filename in os.listdir('./data/economy'):
        if filename[:-5] == str(userid):
            data = get_json("economy/"+filename)
    if data == []:
        data = {

            "id": 0,
            "balance": 0,
            "inventory": {},
            "minecraft": {
                "uuid": "",
                "ign": "",
                "last_log_in": 0,
                "streak": 0
            }
        }
        data["id"] = userid
        data["balance"] = get_json("config.json")["Economy"]["defaultStartBalance"]
        save_json("economy/"+str(userid)+".json", data)

    balance = data["balance"]
    return balance

def secs_to_mins_and_secs(seconds:int) -> str:
    return f"{str(seconds//60).zfill(2)}:{str(seconds%60).zfill(2)}"

def get_dominant_colour(path):
    """
    Find a PIL image's dominant color, returning an (r, g, b) tuple. From https://gist.github.com/nathforge/658336
    """

    lost_and_found()
    image = PIL.Image.open(path)
    image = image.convert('RGBA')
    
    # Shrink the image, so we don't spend too long analysing color
    # frequencies. We're not interpolating so should be quick.
    image.thumbnail((200, 200))
    
    max_score = 0
    dominant_color = None
    
    for count, (r, g, b, a) in image.getcolors(image.size[0] * image.size[1]):
        # Skip 100% transparent pixels
        if a == 0:
            continue
        
        # Get color saturation, 0-1
        saturation = colorsys.rgb_to_hsv(r / 255.0, g / 255.0, b / 255.0)[1]
        
        # Calculate luminance - integer YUV conversion from
        # http://en.wikipedia.org/wiki/YUV
        y = min(abs(r * 2104 + g * 4130 + b * 802 + 4096 + 131072) >> 13, 235)
        
        # Rescale luminance from 16-235 to 0-1
        y = (y - 16.0) / (235 - 16)
        
        # Ignore the brightest colors
        if y > 0.9:
            continue
        
        # Calculate the score, preferring highly saturated colors.
        # Add 0.1 to the saturation so we don't completely ignore grayscale
        # colors by multiplying the count by zero, but still give them a low
        # weight.
        score = (saturation + 0.1) * count
        
        if score > max_score:
            max_score = score
            dominant_color = (r, g, b)
            
    
    return int((r'%02x%02x%02x' % dominant_color), base=16) # Formats back to hex
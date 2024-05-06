from colorama import Back, Fore, Style
import time

def tprint(message: str): # Prints messages with a time stamp prefixing them
    prfx = Back.BLACK + Fore.GREEN + time.strftime("%H:%M:%S UTC", time.gmtime()) + Back.RESET + Fore.WHITE + Style.BRIGHT
    print(prfx + " " + str(message) + Style.RESET_ALL)
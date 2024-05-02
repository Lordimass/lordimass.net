import PIL
from PIL import Image
import random
import PIL.ImageDraw
import numpy
import os
import math
import json

class Rect():
    def __init__(self, width, height=None, img_path:str=None, scale=1):
        if height == None: # Allows for easier squares
            height = width

        self.width = width
        self.height = height
        self.dim = (width, height)

        self.img_path = img_path
        self.scale = scale # If the rect had to be resized to fit on the grid, this value will change from 1

        self.area = width*height
        self.colour = (
            random.randint(0,255),
            random.randint(0,255),
            random.randint(0,255),
        )
class RectPacker():
    def __init__(self, width, dir=None, rects=None, visualise = False):
        self.__sf = 1 # Everything must be scaled to this scale factor, then scaled back up to get real screen coordinates
        while width > 1000: # Forcing width to 3 figures to fight latency
            width //= 10
            self.__sf *= 10

        self.space = (width, 10)

        self.rects = []
        if rects != None: # Rects provided, pack rects into space
            self.rects = self.__sort_by_area(rects)
        if dir != None: # Images provided, pack image dimensions into space
            self.__load_rects_from_images(dir)
            self.__positions = {} # Dictionary of screen coordinates, saved to a file when done 
        elif dir == None and rects == None: # No source provided, raise an error
            raise("No source for rectangles provided")
        
        self.__occupation = numpy.full(shape=(self.space[1], self.space[0]), fill_value=False)
        if visualise:
            self.__image = PIL.Image.new(mode="RGB", size=self.space)
            self.__drawable = PIL.ImageDraw.ImageDraw(self.__image)
        self.visualise = visualise # Allows visualisation to be disabled for performance

    def pack(self): # Actual callable, main loop for packing.
        i = 0
        for rect in self.rects:
            self.__find_and_place(rect)
            i+=1

        if self.visualise:
            self.__image = self.__image.crop(self.__image.getbbox()) # Program intentionally overestimates height of the image, this crops it back down to size
            self.__image.save("output.png")

        if self.__positions != {}: # If it handled images, save their positions to json
            with open(f"positions.json", "w") as f:
                json.dump(self.__positions, f, indent=4)

    def __load_rects_from_images(self, dir):
        img_paths = os.listdir(dir)
        imgs = []

        # Calculating the highest resolution to scale all images to be the same resolution
        maxres = 0
        for img_path in img_paths:
            img = Image.open(f"{dir}/{img_path}")
            img.path = f"{dir}/{img_path}"
            imgs.append(img)
            maxres = max(maxres, img.width*img.height)
            
        for img in imgs:
            res_sf = maxres/(img.width*img.height)
            print(res_sf, img.width*img.height)
            dim = [
                img.width*math.sqrt(res_sf),
                img.height*math.sqrt(res_sf)
                ] # Image dimensions, scaled according to maximum resolution image
            print(dim[0]*dim[1])
            
            sf = 1
            while dim[0] > self.space[0]: # If the image is too large for the canvas, it will resize it.
                dim[0] = math.floor(dim[0] / 10)
                dim[1] = math.floor(dim[1] / 10)
                sf *= 10
            self.rects.append(
                Rect(dim[0], dim[1], img_path=img.path, scale=sf)
            )
        
    def __sort_by_area(self, rectangles):
        # QUICK SORT ALGORITHM
        if len(rectangles) <= 1: # Base case
            return rectangles
        
        pivot = rectangles[0]
        rectangles.pop(0)
        lesser = []
        greater = []

        for rect in rectangles:
            if rect.area < pivot.area:
                lesser.append(rect)
            else:
                greater.append(rect)

        return self.__sort_by_area(greater) + [pivot] + self.__sort_by_area(lesser)

    def __place_rect(self, rect:Rect, pos:tuple):
        print(f"placing {rect.dim} at {pos}")

        # Calculating corner coords
        upleft = pos
        downright = (pos[0]+rect.width-1, pos[1]+rect.height-1)

        # Draw rectangle on PIL
        if self.visualise:
            self.__drawable.rectangle(
                [upleft, downright],
                fill=rect.colour
            )

        # Update Occupation Array
        self.__occupation[upleft[1]:downright[1]+1, upleft[0]:downright[0]+1] = True

        # Update positions dict if needed
        if rect.img_path != None:
            self.__positions[str(rect.img_path)] = (pos[0]*self.__sf, pos[1]*self.__sf)

    def __find_and_place(self, rect:Rect):
        for y in range(len(self.__occupation)):
            for x in range(len(self.__occupation[0])):
                if self.__occupation[y,x]: # Check if the current cell is taken
                    continue # Can't place here, move to the next one
                
                # TopLeft corner found, now to check the area it will cover
                TopLeft = (x,y)
                BottomRight = (
                    x+rect.width-1,
                    y+rect.height-1
                )

                if BottomRight[0]>=len(self.__occupation[0]) or BottomRight[1]>=len(self.__occupation):
                    continue # Rect will hang outside of the available space, discount it and move on

                fail = False
                for SweepY in range(TopLeft[1], BottomRight[1]+1):
                    for SweepX in range(TopLeft[0], BottomRight[0]+1):
                        if self.__occupation[SweepY, SweepX]:
                            fail = True
                            break
                    if fail:
                        break
                if not fail:
                    self.__place_rect(rect, (x,y))
                    return
                
        # If it gets to this point, it must have failed to place it
        # Increase height and try again
        
        print(f"Failed to place {rect.dim}, increasing canvas height and retrying")

        # Expanding occupation array
        additive = numpy.full(shape=(rect.height,self.space[0]), fill_value=False)
        self.__occupation = numpy.concatenate((self.__occupation, additive))

        # Expanding image
        if self.visualise:
            newimage = PIL.Image.new(mode="RGB", size=(self.space[0], rect.height+self.__image.height))
            newimage.paste(self.__image)
            self.__image = newimage
            self.__drawable = PIL.ImageDraw.ImageDraw(self.__image)
            self.__find_and_place(rect)

RectPacker(width=1920, dir = "../images/art").pack()
const httpDirectory = "http://127.0.0.1:5000"
var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
var last_refresh = new Date().getTime()

resized_window = function() { // Reloads the images when the view width changes by enough
  current = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  var percentDifference = Math.abs(vw - current)/vw
  if (percentDifference <0 && (new Date().getTime() - last_refresh) > 5000) {
    vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    last_refresh = new Date().getTime()
    place_images()
    console.log("Viewwidth change, refreshing")
  }

// WILL NOT RESIZE, DISABLED FUNCTION FOR NOW BECAUSE IT WONT WORK, CHANGE LINE ABOVE TO RE-ENABLE, E.G. percentDifference > 0.1

}
window.addEventListener("resize", resized_window)

place_images = function() {
  // Clear any existing files first
  container = document.getElementById("image-container")
  for (var img of container.children) {
    console.log(`Removing ${img.getAttribute("src")}`)
    img.remove()
  }

  // Send an HTTP request to the webserver to fetch image positions
  fetch(URL = httpDirectory+`/?width=${vw}`) // Response is asyncronous
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
      })

      .then(data => {
          positions = data;
          console.log("Positions calculated by Rect-Packer code.");
  
          for (var key in positions) { // Iterate through each of the images
              data = positions[key];

              // Splitting the path into directory parts and taking just the file name
              key = key.split("/")
              key = key[key.length-1]
              const path = "images/art/" + key

              //console.log(key + " => " + data);
              const img = document.createElement("img");
              img.setAttribute("src", path);
              img.setAttribute("width", data[2]);
              img.style.position = "absolute";
              img.style.left = data[0] + "px";
              img.style.top = data[1] + "px";
              // <img src="images/art/Lordi Sticker.png" width="500" style="position: relative; transform:translate(50px, 50px)">

              const container = document.getElementById("image-container")
              container.appendChild(img)
          };
        })

      .catch(error => {
          console.error('Error:', error);
        });
}
place_images()
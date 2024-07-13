const httpDirectory = "http://localhost:8080"
const artDirectory = "images/art"

place_images = function() {
  // Send an HTTP request to the webserver to fetch image paths
  fetch(URL = httpDirectory+`/get_file_list?path=${artDirectory}`) // Response is asyncronous
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
      })

      .then(data => {
          console.log("Successfully fetched images");
          console.log(data);
  
          for (var path_index in data) { // Iterate through each of the images
              path = data[path_index]
              console.log(path);
              const img = document.createElement("img");
              img.setAttribute("src", path);
              img.setAttribute("width", "20%");
              img.classList.add("item")
              // <img src="images/art/Lordi Sticker.png" width="500" style="position: relative; transform:translate(50px, 50px)">

              const container = document.getElementById("image-container")
              container.appendChild(img)
          };

          /* Use masonry to position the images */
          var grid = document.querySelector('.grid');
          var msnry = new Masonry(grid);

          const imagecontainer = window.getElementById("image-container")
          const currentsize = imagecontainer.getAttribute(width)
          imagecontainer.setAttribute("width", "20%")
          imagecontainer.setAttribute("width", currentsize)
        })

      .catch(error => {
          console.error('Error:', error);
        });
}


window.onload = () => {
  place_images()
}


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
              img.setAttribute("width", "100%");
              img.setAttribute("")
              img.classList.add("image")
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
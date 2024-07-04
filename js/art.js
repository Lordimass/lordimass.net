<<<<<<< Updated upstream
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
=======
fetch("http://192.168.1.97:8000/images/art/", {Headers: {"Access-Control-Allow-Private-Network": true}})
.then((res) => {
  if (!res.ok) {
      throw new Error
          (`HTTP error! Status: ${res.status}`);
  }
  return res;
})
.then((data) => 
    console.log(data))
.catch((error) => 
     console.error("Unable to fetch data:", error));
>>>>>>> Stashed changes

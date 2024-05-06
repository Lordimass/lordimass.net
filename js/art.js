const httpDirectory = "http://127.0.0.1:5000"
var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)


fetch(URL = httpDirectory+`/?width=${vw}`) // Response is asyncronous
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
    })

    .then(data => {
        positions = data
        console.log("Positions calculated by Rect-Packer code.")

        for (var key in positions) { // Iterate through each of the images
            console.log(key + " => " + positions[key])
        }



      })

    .catch(error => {
        console.error('Error:', error);
      });


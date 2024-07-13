const footerContainer = document.getElementById('footer');

loadFooter = function() {
    fetch('data://./footer.html')
    .then(data => {
        footerContainer.innerHTML = data;
    })
    .catch(error => {
        console.error('Error fetching footer:', error);
        // Handle the error, like displaying a fallback message
    });
}

loadFooter()
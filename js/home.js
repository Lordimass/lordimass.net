function rotate(el) {
  el.classList.add("rotation")
  // Time here needs to be maintained to be the same length as the animation
  setTimeout(() => {el.classList.remove("rotation");}, 1000) 
}

const sticker = document.getElementById('sticker');
const art_portal = document.getElementById('art-portal');
const art_portal_icon = document.getElementById('art-portal-icon');
sticker        .addEventListener('click', () => {rotate(sticker)}); // () => {} defines a lambda function
art_portal     .addEventListener('click', () => {location.href="art.html";});
art_portal_icon.addEventListener('click', () => {location.href="art.html";});
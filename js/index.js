function rotate(el) {
  el.classList.add("rotation")
  // Time here needs to be maintained to be the same length as the animation
  setTimeout(() => {el.classList.remove("rotation");}, 1000) 
}

const sticker = document.getElementById('sticker');
sticker.addEventListener('click', () => {rotate(sticker)});
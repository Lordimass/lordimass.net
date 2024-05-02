const sticker = document.getElementById('sticker');

function rotate(el) {
  el.classList.add("rotation")
  setTimeout(() => {el.classList.remove("rotation");}, 1000)
}

sticker.addEventListener('click', () => {rotate(sticker)}); // () => {} defines a lambda function
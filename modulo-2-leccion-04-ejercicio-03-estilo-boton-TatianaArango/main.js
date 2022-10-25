'use strict';

const button = document.querySelector('.js_button');

button.addEventListener('click', () => {
  button.classList.toggle('style_button');
  console.log(button);
});

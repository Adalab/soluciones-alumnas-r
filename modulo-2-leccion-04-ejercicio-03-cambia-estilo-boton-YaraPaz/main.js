'use strict';

const button = document.querySelector('.btn');

button.addEventListener('click', () => {
  const buttonClicked = event.currentTarget;
  buttonClicked.classList.toggle('change');
});

'use strict';

const button = document.querySelector('.btn');
const button2 = document.querySelector('.btn2');

button.addEventListener('click', () => {
  const selectedButton = event.currentTarget;
  selectedButton.classList.toggle('selected');
});

button2.addEventListener('click', () => {
  const selectedButton = event.currentTarget;
  selectedButton.classList.toggle('selected');
});

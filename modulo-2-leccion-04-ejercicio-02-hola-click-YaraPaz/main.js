'use strict';

const input = document.querySelector('.input');
const welcomeText = document.querySelector('.text');
const button = document.querySelector('.btn');
let inputValue;

input.addEventListener('input', () => {
  inputValue = input.value;
});
button.addEventListener('click', () => {
  welcomeText.innerHTML = welcomeText.innerHTML + ' ' + inputValue;
});

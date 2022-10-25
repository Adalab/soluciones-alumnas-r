'use strict';

let inputValue;
const input = document.querySelector('.input');
const welcomeText = document.querySelector('.text');
const button = document.querySelector('.btn');

input.addEventListener('input', () => {
  inputValue = input.value;
});

button.addEventListener('click', () => {
  // if (inputValue === undefined) {
  //   welcomeText.innerHTML = 'Inserte un usuario, por favor';
  // }
  // } else {
  //   welcomeText.innerHTML = 'Hola' + ' ' + inputValue;
  // }
  welcomeText.innerHTML = 'Hola';
  welcomeText.innerHTML += ' ' + inputValue;
});

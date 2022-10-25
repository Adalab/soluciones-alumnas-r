'use strict';

const button = document.querySelector('.btn');
const welcomeText = document.querySelector('.text');

button.addEventListener('click', () => {
  welcomeText.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!';
});

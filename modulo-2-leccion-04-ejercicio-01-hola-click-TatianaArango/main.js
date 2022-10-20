'use strict';

const button = document.querySelector('.button');

const text = document.querySelector('.text');

button.addEventListener('click', function () {
  console.log(text);
  text.innerHTML = 'Mi primer click,¡ole yo y la mujer que me parió!';
});

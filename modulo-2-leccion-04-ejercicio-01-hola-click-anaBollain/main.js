'use strict';

const textElement = document.querySelector('.text');

const buttonElement = document.querySelector('.submitt');

buttonElement.addEventListener('click',() => {
    textElement.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!';
});
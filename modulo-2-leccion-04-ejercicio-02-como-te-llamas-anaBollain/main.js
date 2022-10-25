'use strict';

// Declarar constantes

const textElement = document.querySelector('.text');

const buttonElement = document.querySelector('.button');

// Metemos dentro la variable input y result para que no las lea antes del event listener

buttonElement.addEventListener('click', ()=>{
    let inputElement = document.querySelector('.input');
    let result = inputElement.value;
    textElement.innerHTML += ' ' + result;
})



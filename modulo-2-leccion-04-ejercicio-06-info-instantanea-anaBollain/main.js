'use strict';

const textElement = document.querySelector('.text');

let inputElement = document.querySelector('#input');

inputElement.addEventListener('input', (event)=>{
    textElement.innerHTML = event.currentTarget.value;
});



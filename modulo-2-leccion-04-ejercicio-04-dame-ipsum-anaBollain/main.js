'use strict';

const textElement = document.querySelector('.text');

let clickCount = 0;

textElement.addEventListener('click', ()=>{
    textElement.innerHTML += textElement.innerHTML;
});

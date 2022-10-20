'use strict';

const buttonElement = document.querySelector('.button');

const buttonElement1 = document.querySelector('.one');

const buttonElement2 = document.querySelector('.two');

buttonElement1.addEventListener('click', (event)=>{
    event.currentTarget.classList.toggle('buttonUpdate');
});

buttonElement2.addEventListener('click', (event)=>{
    event.currentTarget.classList.toggle('buttonUpdate');
});
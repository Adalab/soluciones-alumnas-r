"use strict"

const text = document.querySelector('.text');
const button = document.querySelector ('.button');

button.addEventListener('click', () => {
    text.innerHTML="Mi primer click, ¡ole yo y la mujer que me parió!";
});


//segundo ejercicio


const helloText = document.querySelector (".hello");
const helloButton =document.querySelector (".hello-button");

helloButton.addEventListener('click', () => {
    const name = document.querySelector(".name-input");
    const nameValue = name.value;
    helloText.innerHTML=helloText.innerHTML + " " + nameValue; //me funciona al ponerlo dentro del evento, no fuera. 
});




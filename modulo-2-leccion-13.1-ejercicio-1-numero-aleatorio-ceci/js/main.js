'use strict';

//1. Generar número aleatorio

const text = document.querySelector('.js-text');
const btn = document.querySelector('.js-btn');

function getNumber(){
    fetch('https://api.rand.fun/number/integer?min=0&max=300')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        text.innerHTML = data.result;
    });
}

btn.addEventListener('click', getNumber);
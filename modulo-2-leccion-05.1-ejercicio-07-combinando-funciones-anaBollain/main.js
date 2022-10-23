'use strict';

// Combinando funciones

// querySelector

function getEl(element){
    return document.querySelector(element);
}

// Usar módulo, si la división entre 2 es igual a 0, significa que es par, sino será impart %2

function paresNones (a){
    if(a % 2 === 0){
        return console.log(`El número es par`);  
    }
    if(a % 2 === 1){
        return console.log(`El número es impar`);
    }
}

// Creamos una variable con el elemento HTML
const textEl = getEl('.js-text');

// Creamos una variable con el innerHTML del elemento, forzando a que sea un número

const textElNum = parseInt(textEl.innerHTML);

//Ejecutamos la función con la variable número declarada

paresNones(textElNum);




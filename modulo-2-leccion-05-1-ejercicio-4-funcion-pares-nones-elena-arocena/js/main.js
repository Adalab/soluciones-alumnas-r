"use strict";

function number(n) {
  if ((n % 2) === 0 ) {
    return 'El número es par';
  } else {
    return 'El número es impar';
  }
}

// Declaración de las constiables
const n = 6;

// Llamada a la función
number(n);
console.log(number(n));
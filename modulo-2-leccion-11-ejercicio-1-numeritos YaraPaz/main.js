'use strict';
//crear funcion que meta en un array vacío numeros del 1 al 100 de manera automatica

//Elements
const numbers = [];
let number = 0;

//functions
function get100Numbers() {
  for (let i = 0; i < 100; i++) {
    number++;
    numbers.push(number);
  }
  return numbers;
}

get100Numbers();

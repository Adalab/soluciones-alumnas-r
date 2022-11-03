'use strict';

//crear funcion que meta en un array vacío numeros del 1 al 100 de manera automatica pero en orden inverso

//Elements
const numbers = [];
let number = 101;

//functions
function getReversed100Numbers() {
  for (let i = 101; i > 0; i--) {
    //Cuando el loop es al reves tambien debo indicar hasta que número tiene que llegar y de que numero parte
    number--;
    numbers.push(number);
  }
  return numbers;
}

getReversed100Numbers();

//------- (otra manera usando REVERSE)------

//Elements
const numbers = [];
let number = 0;

//functions
function getReversed100Numbers() {
  for (let i = 0; i < 100; i++) {
    number++;
    numbers.push(number);
  }
  return numbers.reverse();
}

getReversed100Numbers();

'use strict';

//crear funcion que nos devuelve algunos numeros del array que tenemos siguiendo estos pasos:
//1. Crear un nuevo array que contiene solo numeros pares.
//- Crear array vacío
//- Recorrer array dado para al encontrar un numero par meterlo en el nuevo array

//Elements
const lostNumbers = [4, 8, 15, 16, 23, 42];
const evenLostNumbers = [];
const multipleOfThreeLostNumbers = [];

//Functions
function bestLostNomber() {
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
      evenLostNumbers.push(lostNumbers[i]);
    }
    if (lostNumbers[i] % 3 === 0) {
      multipleOfThreeLostNumbers.push(lostNumbers[i]);
    }
  }
  return evenLostNumbers.concat(multipleOfThreeLostNumbers);
}

bestLostNomber();

'use strict';

numbers = [1, 7, 15, 22, 8];

numbers.push(28); //Añadir un nuevo elemento al final del array

// console.log(numbers); //consolearlo todo siempre para ver que está generando los valores que queremos

let sum = 0;
for (i = 0; i < numbers.length; i++) {
  //No indicar i <= numbers.lenght. Da NaN.
  sum += numbers[i];
}
let average = sum / numbers.length; //numero de elementos en el array

//------------- (ahora todo con una function) ----------------

function average(array) {
  //calcula la media del array
  //Devuelve la media cuando se la invoca (return)
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
}

average(numbers);

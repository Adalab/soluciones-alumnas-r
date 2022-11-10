'use strict';

const arrayTester = ['vaca', 'pollo', 'toro', 'pájaro', 'amigo'];
const arrayTester2 = ['Isma', 'Paula', 'Noe', 'Yara'];

//Practicar subarrays
const subArray = arrayTester.slice(0, 1);
console.log(subArray);

//Concatenar Arrays
arrayTester.concat(arrayTester2);

//CopyWithin: copia las posiciones que yo le indique del array y me las coloca sin modificar su longitud
arrayTester.copyWithin(0, 2);
console.log(arrayTester);

//Fill - rellena todos los elementos del array con este nuevo valor. Su length no se modifica
arrayTester.fill(2);

//Ordenar el array
arrayTester2.sort();
console.log(arrayTester2);

'use strict';

let number = 3;

if (number === 0) {
  console.log('El número es 0');
} else if (number < 0) {
  console.log('El número es negativo');
} else if (number + 2 > 13 && number + 2 <= 20) {
  console.log('El número más 2 es mayor que 13 pero menor o igual que 20');
} else if (number > 20 && number < 50) {
  console.log('El número es mayor que 20 pero menor que 50');
} else {
  console.log('el número no es 123123125');
}

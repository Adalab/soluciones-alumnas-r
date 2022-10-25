'use strict';

function getEl(a) {
  return document.querySelector(a).innerHTML;
}

// const getEl = (a) => document.querySelector(a).innerHTML;

const textEl = parseInt(getEl('.text'));

console.log(textEl);

function evenOdd(number) {
  if (number % 2 === 0) return 'Este número es PAR';
  else return 'Este número es IMPAR';
}

// const evenOdd = (number) => {
//   if (number % 2 === 0) return 'Este número es PAR';
//   else return 'Este número es IMPAR';
// };

const result = evenOdd(textEl);
console.log(result);

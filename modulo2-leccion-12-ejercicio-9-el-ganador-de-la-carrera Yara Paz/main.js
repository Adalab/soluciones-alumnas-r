'use strict';

const runners = [
  { name: 'Gregory Goyle', time: 56 },
  { name: 'Nymphadora Tonks', time: 9 },
  { name: 'Luna Lovegood', time: 45 },
  { name: 'Cedric Diggory', time: 28 },
  { name: 'Cho Chang', time: 35 },
];

const winner = runners.reduce((acc, winner) => {
  if (winner.time === 9) {
    const acc = {};
    acc.name = winner.name;
    acc.time = winner.time;
    // return acc;
  }
  return acc;
});

console.log(winner);

//1. Acc es el objeto vacío donde meteré mi nuevo objeto deconstruido
//2. winner es el objeto del array por el que estoy pasando
//Si le digo: oye, pasame por todos los objetos del array pero solo meteme dentro de mi nuevo objeto acc, el que luego me retornarás, el que tenga su time mas bajo, es decir, el que tenga el time === 9
//FIN

//INTENTO 1 - OBJECT.ASSIGN
// const winner = runners.reduce((acc, winner) => {
//   return Object.assign(acc, {
//     [winner.name]: winner.time,
//   });
// }, {});

//3. Le pido que me devuelva los objetos por los que acc pasará del array y los meta en mi nuevo objeto vacío que contendrá el nombre del corredor y su tiempo.
//4. Con object assign consigo que del objeto anterior, en este caso acc, se copie todo al objeto nuevo, en este caso runner, de la manera especificada

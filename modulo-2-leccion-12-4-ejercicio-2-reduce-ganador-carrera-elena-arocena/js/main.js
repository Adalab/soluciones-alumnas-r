"use strict";

const runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
];

const runnersWinner = runners.reduce((prev, curr) => prev.time < curr.time ? prev : curr); 

//1-entre parentesis puedo poner los parámetros que yo considere (no tiene por que ser acc y number)
//2-prev.time y curr.time = comparo en cada iteracion un elemento contra el siguiente de la lista (56 contra 9, 9 contra 45, 9 contra 28, 9 contra 35 - siempre guarda el 9 porque con el signo < le estoy diciendo que se quede con el más pequeño del array). Esto me devolverá el número más bajo de la lista.
//3-Con ? y : estoy haciendo una condicional. Esta condicional lo que me dice es que si el valor previo es más pequeño que el actual me quedo con el previo, y sino con el actual.
 
console.log(runnersWinner);


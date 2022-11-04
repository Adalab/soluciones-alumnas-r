// Ejercicio 2. Los pares pueden entrar

'use strict';

const pins = [2389, 2384, 2837, 5232, 8998];

/* Usando el método filter de los arrays a cada elemento del array o pin le decimos que si su módulo da como
resultado 0 entonces es par por lo que nos lo debe devolver e introducirlo en el nuevo array pinsPar */

const pinsPar = pins.filter( pin => pin % 2 === 0)

console.log (pinsPar)
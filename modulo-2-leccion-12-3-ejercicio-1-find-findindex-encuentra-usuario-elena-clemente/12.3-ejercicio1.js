// Ejercicio 1. Encuentra el usuario

'use strict';

const users = [
    { name: "María", isPremium: false, pin: 2389 },
    { name: "Lucía", isPremium: true, pin: 2384 },
    { name: "Susana", isPremium: true, pin: 2837 },
    { name: "Rocío", isPremium: false, pin: 5232 },
    { name: "Inmaculada", isPremium: false, pin: 8998 },
];

/* Con el método find buscamos en nuestro array users, dando como parámetro user que se corresponde
a cada objeto dentro del array y le decimos que nos añada en el nuevo array pinError aquel cuyo user.pin
sea igual a 5232.

Tras esto lo borramos usando el splice pero para saber en qué posición se encuentra primero usamos el método
findIndex que nos devuelve la posición 3, tras esto usamos splice indicando la posición que deseamos
borrar 3 y el numero de elementos que queremos borrar en este caso solo 1*/

const pinError = users.find((user => user.pin === 5232))

const findUser = users.findIndex((user => user.pin === 5232))
const eraseUser = users.splice(3,1);

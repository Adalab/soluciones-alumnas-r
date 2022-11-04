// Ejercicio 3. Los usuarios que pueden entrar

'use strict';

const users = [
    { name: "María", isPremium: false, pin: 2389 },
    { name: "Lucía", isPremium: true, pin: 2384 },
    { name: "Susana", isPremium: true, pin: 2837 },
    { name: "Rocío", isPremium: false, pin: 5232 },
    { name: "Inmaculada", isPremium: false, pin: 8998 },
];

/* Usando el método de los arrays filter creamos una nueva constante (usersPar) que va a recoger el nuevo 
array generado. Recorremos cada objeto (user) de nuestro array (users) y en la condicional preguntamos si
el modulo de user.pin es igual a 0 entonces es par por lo que nos lo debe devolver e introducirlo en el 
nuevo array usersPar */

const usersPar = users.filter((user) => {
    if (user.pin % 2 === 0) {
        return user
    }
})

console.log (usersPar)
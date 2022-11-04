// Ejercicio 3. Gracias por confiar en nosotros

'use strict';

const users = [
    { name: "María", isPremium: false },
    { name: "Lucía", isPremium: true },
    { name: "Susana", isPremium: true },
    { name: "Rocío", isPremium: false },
    { name: "Inmaculada", isPremium: false },
];

/* En este caso vamos a tener dos saludos diferentes, dependiendo de si nuestro usuario es premium o no. Usando el método map vamos a 
crear una nueva variable donde recoger estos saludos. Recorremos cada user de nuestro array users y con la condicional le preguntamos
si el user.isPremium es true entonces nos devuelve la primera opcion, si es false, la segunda */

const greetings = users.map((user) => {
    if (user.isPremium){ // es lo mismo que poner user.isPremium === true
        return 'Bienvenida ' + user.name + '. Gracias por confiar en nosotros.'
    } else {
        return 'Bienvenida ' + user.name
    }
})

console.log(greetings);
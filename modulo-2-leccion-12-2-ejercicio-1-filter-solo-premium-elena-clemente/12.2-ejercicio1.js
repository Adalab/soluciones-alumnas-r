// Ejercicio 1. Solo los premium

'use strict';

const users = [
    { name: "María", isPremium: false },
    { name: "Lucía", isPremium: true },
    { name: "Susana", isPremium: true },
    { name: "Rocío", isPremium: false },
    { name: "Inmaculada", isPremium: false },
];

/* Ahora vamos a crear un nuevo array solo con los usuarios premium, para ello hacemos una constante que 
va a recoger nuestro nuevo array y con el método filter le decimos que para cada user (objeto) del array 
users entre en la propiedad isPremium y si es true nos devuelva este user (objeto).
Podemos hacerlo también como la opción comentada del final que quita la condicional porque está implícita */

const premiumUsers = users.filter((user) => {
    if (user.isPremium){  // funciona igual que poner user.isPremium === true
        return user
    }
})

// const premiumUsers = users.filter(user => user.isPremium); 

console.log(premiumUsers)
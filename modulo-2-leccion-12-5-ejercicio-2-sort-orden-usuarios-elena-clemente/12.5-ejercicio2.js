// Ejercicio 2. Poniendo orden en nuestros usuarios

'use strict';

const users = [
    { name: "María", isPremium: false, pin: 2389 },
    { name: "Lucía", isPremium: true, pin: 2384 },
    { name: "Susana", isPremium: true, pin: 2837 },
    { name: "Rocío", isPremium: false, pin: 5232 },
    { name: "Inmaculada", isPremium: false, pin: 8998 },
];

/* Para ordenarlos por orden alfabético le pasamos dos parámetros a y b que hacen referencia a users[0] y users[1]
y le decimos que si el nombre de a es menor o anterior en el alfabeto que el nombre de b nos devuelva -1 es lo 
mismo que decir que nos devuelva a y lo guarde o que si el nombre de a es mayor que el de b, lo mismo que decir
que el nombre de b va antes en el alfabeto entonces que nos devuelva un 1 y nos retorna el valor de b, dandonos
0 si son la misma letra del abecedario y quedando con la misma posicion en el array */

users.sort((a, b) => {
    if (a.name < b.name){
        return -1
    } else if (a.name > b.name){
        return 1
    } else {
        return 0
    }
});

/* Usamos el mismo método para ordenar por pin pero en este caso la a va a ser a.pin y la b b.pin si el 
valor de a es menor que el de b le debemos indicar que nos devuelva -1 para que nos retorne el valor de a 
y si el valor de b es menor le pedimos que nos devuelva 1 o lo que es lo mismo el valor de b, si son iguales
le pedimos que nos devuelva 0 es decir que se queden en la misma posicion en el array */ 

users.sort((a, b) => {
    if (a.pin < b.pin){
        return -1;
    } else if (a.pin > b.pin){
        return 1;
    } else {
        return 0;
    }
});

console.log(users)
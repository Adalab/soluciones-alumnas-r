// Ejercicio 2. Saludar es de buena educación

'use strict';

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

/* En este ejercicio usamos maps para añadir 'Bienvenida' delante de cada elemento de nuestro array
y crear un nuevo array con este saludo. Usamos el método map para ir recorriendo cada elemento de names
con el parámetro name al que le pedimos que dentro de la funcion añada el string delante del elemento.
Se puede poner sin paréntesis porque solo hay un parámetro */


const greetings = names.map(name => 'Bienvenida ' + name);
//const greetings = names.map((name) => 'Bienvenida ' + name);

console.log(greetings);

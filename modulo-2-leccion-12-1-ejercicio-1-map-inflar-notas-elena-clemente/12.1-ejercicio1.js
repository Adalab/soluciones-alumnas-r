// Ejercicio 1. Inflar las notas

'use strict';

const marks = [5, 4, 6, 7, 9];

/* Tenemos que añadir 1 a cada valor de nuestro array, usando el método map. En este caso mark hace referencia a cada valor dentro del 
array (marks) al que le vamos a sumar 1 y el nuevo array nos lo devuelve dentro de la constante inflatedMarks.
Podemos hacerlo usando una de las dos maneras propuestas, no hace falta poner los paréntesis porque en las funciones array si solo 
hay un parámetro no es necesario */


const inflatedMarks = marks.map(mark => mark + 1)

//const inflatedMarks = marks.map((mark) => mark + 1)

console.log(inflatedMarks);


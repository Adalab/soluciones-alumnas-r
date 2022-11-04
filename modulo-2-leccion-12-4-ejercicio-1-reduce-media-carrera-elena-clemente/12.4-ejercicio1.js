// Ejercicio 1. La media de la carrera

'use strict';

const times = [56, 9, 45, 28, 35];

/* Para calcular la media del array times usando el método reduce le damos dos parámetros, un acumulador (acc) y el elemento del array 
(time) en este caso la función va a ir sumando el elemento del array (56, 9, 45...) al acumulador y después lo va a dividir entre la 
longitud del array (5) para obtener la media */

const media = times.reduce((acc, time) => (acc + time) / times.length) // ... / times.length, 0) podemos incluir el 0 o no, no es necesario

console.log(media)
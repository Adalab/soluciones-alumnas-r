'use strict';

/* c) Vamos a generalizar el código anterior creando una función average. Esta función toma como parámetro un array numbers, calcula la media del array (de cualquier longitud) y devuelve la media. Para poder trabajar con arrays de cualquier longitud, deberemos consultar la longitud del array mediante su propiedad length. Para comprobar que la función hace el cálculo correcto, la invocaremos (o ejecutaremos para que no suene tan esotérico) varias veces pasándole como argumento un array con diferente longitud cada vez y mostraremos el resultado en la consola del navegador. */

const newNumbersArray = [3,6,8,13,16];
let sum = 0;
const arrayNumbers = newNumbersArray.length;

function average (param){
    
    for (let index = 0; index < param; index++) {
        sum += newNumbersArray[index];
        console.log(sum);
        
    }
    const newArrayMedia = sum / param;
    console.log(`La media usando una función es de ${newArrayMedia}`) ;

}

/* average(arrayNumbers); */

newNumbersArray[5] = 21;
console.log(newNumbersArray)

average(arrayNumbers);

/* Devuelve
(6) [3, 6, 8, 13, 16, 21]
3
9
17
30
46
La media usando una función es de 9.2
*/
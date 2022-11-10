'use strict';

/*2. Contando de dos en dos
Vamos a partir de una variable acc con valor 0. Construiremos un bucle que se ejecute 10 veces y sume 2 a la variable acc en cada iteración del bucle. Al acabar el bucle, mostraremos en la consola el texto El resultado es: X, siendo X el valor de la variable acc.*/

let acc = 0;

for (let i = 0; i <= 10; i++ ){
    i++;
    //sumamos otro más, uno en el enunciado del bucle, otro dentro, así es el +2 que pide el ejercicio, también podría ser += 2
    console.log(i);
    /* Devuelve
        1
        3
        5
        7
        9
        11*/
        
    acc = i; 
        
}

console.log(`El resultado es: ${acc}`);

//Devuelve El resultado es: 11
'use strict';

/* 4. La media
a) Vamos a crear un nuevo array numbers que contendrá 5 números cualesquiera. Vamos a recorrer el array mediante un bucle para calcular la media de los números (la suma de los números dividido por cuántos hay, es decir, 5). Necesitaremos una variable (acumulador) para ir almacenando la suma de todos los números y después poder hacer la media. Para comprobar si el resultado es correcto, vamos a loguearlo en la consola. */

const numbers = [2,5,10,23,34];

let adition = 0;

for (let index = 0; index < numbers.length; index++) {
    adition += numbers[index];
    console.log(adition);
    /*  Devuelve
        2
        7
        17
        40
        74
    */
}

const media = adition/numbers.length;
console.log(`La media es de ${media}`) 

// Devuelve La media es de 14.8


/* b) Ahora vamos añadir un nuevo número al array y repetir el cálculo de la media. En este caso, para calcular la media habrá que sumar todos y dividir entre el total, que ahora es 6. */

numbers[5] = 40;
console.log(numbers);

// Devuelve (6) [2, 5, 10, 23, 34, 40] y confirmamos que se ha añadido bien el último nº y que ahora son 6

let adition2 = 0;

for (let index = 0; index < numbers.length; index++) {
    adition2 += numbers[index];
    console.log(adition2);
    /*  Devuelve
        2
        7
        17
        40
        74
        114
    */
}

const newMedia = adition2/numbers.length;
console.log(`La nueva media es de ${newMedia}`) ;

// Devuelve La nueva media es de 19


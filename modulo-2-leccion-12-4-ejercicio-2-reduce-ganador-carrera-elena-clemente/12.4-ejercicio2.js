// Ejercicio 2. El ganador de la carrera

'use strict';

const runners = [
    { name: "Gregory Goyle", time: 56 },
    { name: "Nymphadora Tonks", time: 9 },
    { name: "Luna Lovegood", time: 45 },
    { name: "Cedric Diggory", time: 28 },
    { name: "Cho Chang", time: 35 },
];

/* Usamos el método reduce en este caso como parámetros pasamos como parámetros el result que queremos que nos devuelva (como si fuese el
    acumulador) y el runner (elemento dentro del array de runners) que es como si fuese un index con el que vamos a ir recorriendo el 
    array. Incluimos un condicional en la funcion, si el tiempo del runner es menor que el del resultado queremos que nos guarde el runner, 
    en cambio si el tiempo del resultado es menor, le pediremos que nos guarde el del resultado, para así cuando recorra todos los
    elementos del objeto nos guarde en runner el tiempo más bajo. 

    !result en la condicional es para iniciar la condicional, debido a que al no darle un valor a result, la primera vez que entra en
    la condicional su valor es undefined, e intenta comparar el runner.time con undefined y no deja continuar, en este caso para la 
    primera vuelta le decimos que si el valor de result no es true, es undefined que nos devuelva runner, así en la siguiente vuelta
    result valdrá el runner[0] es decir { name: "Gregory Goyle", time: 56 } y el runner pasará a ser runner[1] */

const winner = runners.reduce((result, runner) => {
    if (!result || runner.time < result.time){
        return runner
    } else {
        return result
    }
})

console.log(winner)
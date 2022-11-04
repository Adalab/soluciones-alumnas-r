// Ejercicio 1. Clasificación de la carrera

'use strict';

const runners = [
    { name: "Gregory Goyle", time: 56, student: true },
    { name: "Nymphadora Tonks", time: 9, student: false },
    { name: "Luna Lovegood", time: 45, student: true },
    { name: "Cedric Diggory", time: 28, student: true },
    { name: "Cho Chang", time: 35, student: true },
];

/* Usamos el método sort para obtener una clasificación de la carrera según los tiempos. Podemos reutilizar el 
método filter del ejercicio anterior para eliminar los que no sean estudiantes. Una vez hecho esto con el 
nuevo array filterStudents usamos el método sort, al que le tenemos que dar dos parámetros (a, b) porque
este método necesita dos valores que va a comparar para ver si uno es más grande que otro, más pequeño, etc.
Mediante una condicional le preguntamos si el tiempo de a (corresponde al primer objeto dentro del array) o 
runners[0] es mayor que el tiempo de b (el segundo) o runners[1] en el caso en el que lo sea queremos 
el b que es el de menor tiempo por lo que pedimos que nos devuelva 1 para quedarnos con la segunda opcion.
En el caso de que no sea así le preguntamos si el tiempo de a es menor que el de b y si es así que nos 
devuelva un -1 en este caso va a guardar el valor de a y si son el mismo tiempo que nos devuelva 0 
y guardaría los dos en la posicion en la que están */

const filterStudents = runners.filter(runner => {
    if (runner.student){
        return runner
    }
})

filterStudents.sort((a, b) => {
    if (a.time > b.time){
        return 1; 
    } else if (a.time < b.time){
        return -1;
    } else {
        return 0
    }
}); 

console.log(runners)

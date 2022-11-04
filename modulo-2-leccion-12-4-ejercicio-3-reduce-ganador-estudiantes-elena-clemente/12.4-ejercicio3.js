// Ejercicio 3. El ganador de los estudiantes

'use strict';

const runners = [
    { name: "Gregory Goyle", time: 56, student: true },
    { name: "Nymphadora Tonks", time: 9, student: false },
    { name: "Luna Lovegood", time: 45, student: true },
    { name: "Cedric Diggory", time: 28, student: true },
    { name: "Cho Chang", time: 35, student: true },
];

/* Primero usamos filter para que nos devuelva un array con los runners cuya propiedad student es true */

const filterStudents = runners.filter(runner => {
    if (runner.student){
        return runner
    }
})

// const filterStudents = runners.filter(runner => runner.student) Podemos usar esta funcion simplificada

/* A continuacion usamos la misma funcion que en el ejercicio anterior con el metodo reduce para que en la 
constante winner nos guarde un nuevo array con el ganador, es decir el runner con el tiempo más bajo que 
además sea estudiante por lo que el metodo reduce lo usamos en el array filterStudents no en el de runners */

const winner = filterStudents.reduce((result, student) => {
    if (!result || student.time < result.time){
        return student
    } else {
        return result
    }
})

console.log(winner)
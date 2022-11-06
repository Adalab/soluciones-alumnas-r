'use strict';

/* 5. Estructura de datos para un usuario
Vamos a crear un objeto para almacenar la información de un usuario y una constante llamada job donde guardaremos el valor 'developer'. A continuación seguiremos los siguiente pasos:
Usando la notación con punto o la notación con corchetes ([]) (ej: obj.prop o obj["prop"]):*/

const userData = {}

const job = 'developer';


// Añadiremos una propiedad llamada firstName y le asignaremos un valor. 

userData.firstName = 'Eric';
console.log(userData);
// Devuelve {firstName: 'Eric'}

// Añadiremos una propiedad llamada lastName y le asignaremos un valor.

userData.lastName = 'Gutiérrez';
console.log(userData); 
// devuelve {firstName: 'Eric', lastName: 'Gutiérrez'}

//Añadiremos una propiedad llamada age y le asignaremos un valor numérico. 

userData.age = 2;
console.log(userData);
// devuelve {firstName: 'Eric', lastName: 'Gutiérrez', age: 2}

// Añadiremos una propiedad job a la que asignaremos el valor de la constante job

userData.job = job;
console.log(userData);
// devuelve {firstName: 'Eric', lastName: 'Gutiérrez', age: 2, job: 'developer'}

//Comprobaremos que al obtener el valor de cada una de las propiedades que hemos definido hasta ahora, este es correcto

console.log(userData.firstName); // devuelve Eric
console.log(userData.lastName); // devuelve Gutiérrez
console.log(userData.age); // devuelve 2
console.log(userData.job); // devuelve developer

//Cambiaremos el nombre del usuario por otro distinto
userData.firstName = 'Enrique';
console.log(userData);
// devuelve {firstName: 'Enrique', lastName: 'Gutiérrez', age: 2, job: 'developer'}

//Aumentaremos en 1 la edad del usuario

userData.age += + 1;
console.log(userData);
//devuelve {firstName: 'Enrique', lastName: 'Gutiérrez', age: 3, job: 'developer'}



/*Comprobaremos de nuevo que todo sigue funcionando correctamente */
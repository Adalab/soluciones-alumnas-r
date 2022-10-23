'use strict';

// Logueando errores

// Creamos una condición de que si el result === null, salga un error en la consola. Sino, se ejecuta lo descrito en else. 

// Si ponemos en if result === '' la consola entra en else y devuelve null por defecto, por lo que para que salga el mensaje de error tenemos que poner result === null en la condicional if. 

function getEl(element){
    const result = document.querySelector(element);
    if (result === null){
        console.error(`No existe ningún elemento con clase, id o tag llamado ${element}`);
    }else{
        console.log(`encontrado : ${element}`);
        return result;
    }
}

const textEl = getEl('.text'); //Creamos una variable
console.log(typeof(textEl)); //Devuelve object
console.log(textEl); // Devuelve el elemento HTML

const buttonEl = getEl('.button'); //Creamos una variable

console.log(buttonEl); // Nos sale el error, ya que el elemento HTML no existe

console.log(typeof(buttonEl)); //Devuelve undefined
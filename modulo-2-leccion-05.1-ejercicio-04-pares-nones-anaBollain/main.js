'use strict';

// Pares o nones

// Usar módulo, si la división entre 2 es igual a 0, significa que es par, sino será impart %2

function paresNones (a){
    if(a % 2 === 0){  
        return console.log(`El número es par`); 
    }
    if(a % 2 === 1){
        return console.log(`El número es impar`);
    }
}

paresNones (7);

paresNones (2);
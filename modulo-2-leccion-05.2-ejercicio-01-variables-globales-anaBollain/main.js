'use strict';

// Modificamos una variable de ámbito global

let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}

console.log(secretLetter); // devuelve "y"
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x", si no ejecutamos la función en la línea anterior console.log(mySecretLetter()); devuelve "y"


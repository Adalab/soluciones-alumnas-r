'use strict';

// modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x"

// devuelve x en ambos casos porque al llamar a la funcion que cambia el valor de "secretletter" le estamos
// cambiando el valor a la variable. Si a la funcion la llamo despues el primer console-log deberia imprimirme y, que es el valor
// inicialmente aplicado, y el segundo ya deberia darme la x (ya que en él localmente se ha cambiado el valor de esa variable a x).-

// Si por el contrario mando llamar a la funcion primero, la variable cambiará su valor YA y al volver a llamar a "secretletter" será con su nuevo valor
// establecido por la funcion

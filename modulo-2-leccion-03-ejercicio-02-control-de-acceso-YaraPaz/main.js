'use strict';
<<<<<<< HEAD:modulo-2-lleccion-03-ejercicio-02-control-de-acceso-YaraPaz/main.js
let saludo = 'cosa';
// let allowedUserName = 'Maria';
let input = document.querySelector('#username');
// let inputValueAttribute = input.setAttribute('value', `${allowedUserName}`);
let inputValueInfo = document.getElementById('username').value;
let text = document.querySelector('.text');

if (inputValueInfo === 'Maria') {
  text.innerHTML = `Bienvenida, ${saludo}`;
=======

let allowedUserName = 'Sara';
const input = document.querySelector('#username');
// let inputValueAttribute = input.setAttribute('value', `${allowedUserName}`);
input.value = allowedUserName;
let inputValueInfo = document.getElementById('username').value;
let text = document.querySelector('.text');

if (inputValueInfo === 'María') {
  text.innerHTML = `Bienvenida, ${allowedUserName}`;
>>>>>>> 3e1b4f96ec0fb35dd34189ecf02b1c5a0aa9b322:modulo-2-leccion-03-ejercicio-02-control-de-acceso-YaraPaz/main.js
} else if (inputValueInfo === '') {
  text.innerHTML = 'Introduce un nombre de usuario';
} else if (inputValueInfo !== 'Maria') {
  text.innerHTML =
    'Lo siento, pero el usuario que has introducido no está registrado';
}

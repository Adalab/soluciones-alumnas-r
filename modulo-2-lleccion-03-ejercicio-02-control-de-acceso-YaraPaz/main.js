'use strict';
let saludo = 'cosa';
// let allowedUserName = 'Maria';
let input = document.querySelector('#username');
// let inputValueAttribute = input.setAttribute('value', `${allowedUserName}`);
let inputValueInfo = document.getElementById('username').value;
let text = document.querySelector('.text');

if (inputValueInfo === 'Maria') {
  text.innerHTML = `Bienvenida, ${saludo}`;
} else if (inputValueInfo === '') {
  text.innerHTML = 'Introduce un nombre de usuario';
} else if (inputValueInfo !== 'Maria') {
  text.innerHTML =
    'Lo siento, pero el usuario que has introducido no está registrado';
}

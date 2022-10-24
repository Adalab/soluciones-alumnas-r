'use strict';

let allowedUserName = 'Sara';
const input = document.querySelector('#username');
// let inputValueAttribute = input.setAttribute('value', `${allowedUserName}`);
input.value = allowedUserName;
let inputValueInfo = document.getElementById('username').value;
let text = document.querySelector('.text');

if (inputValueInfo === 'María') {
  text.innerHTML = `Bienvenida, ${allowedUserName}`;
} else if (inputValueInfo === '') {
  text.innerHTML = 'Introduce un nombre de usuario';
} else if (inputValueInfo !== 'Maria') {
  text.innerHTML =
    'Lo siento, pero el usuario que has introducido no está registrado';
}

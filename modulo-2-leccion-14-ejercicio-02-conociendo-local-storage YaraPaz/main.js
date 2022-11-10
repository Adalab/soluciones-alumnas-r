'use strict';

const input = document.querySelector('.js_input');
const text = document.querySelector('.js_text');

function consultLocalStorage() {
  const name = localStorage.getItem('name');
  text.innerHTML = name;
  input.value = name;
}

consultLocalStorage();

function handleInput() {
  const value = input.value;
  text.innerHTML = value;
  localStorage.setItem('name', value);
}

input.addEventListener('input', handleInput);

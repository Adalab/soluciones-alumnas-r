'use strict';

const btn = document.querySelector('.js_btn');
const list = document.querySelector('.js_list');
const inputs = document.querySelectorAll('.js_input');
let data = {};

function renderCharacter() {
  let html = '';
  const character = JSON.parse(localStorage.getItem('data'));
  html = `<li>${character.name}</li><li>${character.surname}</li>`;
  list.innerHTML = html;
}

function handleClick(ev) {
  ev.preventDefault();
  for (const input of inputs) {
    const inputValue = input.value;
    const inputId = input.id;
    if (inputId === 'name') {
      data.name = inputValue;
    } else {
      data.surname = inputValue;
    }
  }
  localStorage.setItem('data', JSON.stringify(data));
  renderCharacter();
}

btn.addEventListener('click', handleClick);

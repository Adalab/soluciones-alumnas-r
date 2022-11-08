'use strict';

const radios = document.querySelectorAll('.js_radio');
const body = document.querySelector('.js_body');

const selectedTheme = localStorage.getItem('theme');
console.log(selectedTheme);
body.classList.add(selectedTheme);

function changeBackgroundTheme(ev) {
  const clickedRadio = ev.target.id;
  if (clickedRadio === 'bright') {
    body.classList.add('bright');
    body.classList.remove('dark');
    localStorage.setItem('theme', clickedRadio);
  } else {
    body.classList.remove('bright');
    body.classList.add('dark');
    localStorage.setItem('theme', clickedRadio);
  }
}

radios.forEach((radio) => {
  radio.addEventListener('click', changeBackgroundTheme);
});

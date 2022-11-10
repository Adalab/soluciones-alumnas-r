'use strict';

function showMessage() {
  const main = document.querySelector('.js_main');
  main.classList.remove('collapsed');
}

setTimeout(showMessage, 15000);

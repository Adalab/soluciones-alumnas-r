'use strict';

const content = document.querySelector('.js_content');
window.addEventListener('scroll', () => {
  console.log('hola');
  if (window.scrollY > 250) {
    content.classList.add('content');
    content.classList.remove('content1');
  } else {
    content.classList.add('content1');
    content.classList.remove('content');
  }
});

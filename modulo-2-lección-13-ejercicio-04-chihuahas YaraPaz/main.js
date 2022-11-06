'use strict';

function getChihuahua() {
  fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then((response) => response.json())
    .then((data) => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Un chihuahua';
    });
}
const btn = document.querySelector('.js-chihuahua');
btn.addEventListener('click', getChihuahua);

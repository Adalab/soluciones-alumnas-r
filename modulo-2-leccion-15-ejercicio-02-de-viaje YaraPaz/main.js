'use strict';

const select = document.querySelector('.js_select');
const images = document.querySelectorAll('.js_img');
let ev = '';

for (const image of images) {
  image.src = './images/default.png';
}
function handleImage() {
  const selectValue = select.value;
  console.log(selectValue);
  if (selectValue === 'Madrid') {
    images[0].src = './images/madrid-1.jpg';
    images[1].src = './images/madrid-2.jpg';
    images[2].src = './images/madrid-3.jpg';
  } else if (selectValue === 'Paris') {
    images[0].src = './images/paris-1.jpg';
    images[1].src = './images/paris-2.jpg';
    images[2].src = './images/paris-3.jpg';
  } else if (selectValue === 'NY') {
    images[0].src = './images/ny-1.jpg';
    images[1].src = './images/ny-2.jpg';
    images[2].src = './images/ny-3.jpg';
  }
}

select.addEventListener('change', handleImage); //cuando cambiamos algo, un radio, un select, se puede aplicar este evento sobre dicho elemento

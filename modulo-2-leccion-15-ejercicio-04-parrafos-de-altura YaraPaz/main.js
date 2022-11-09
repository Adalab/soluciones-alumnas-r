'use strict';

const div = document.querySelector('.js_div');

const divMeasures = div.offsetHeight; //me devuelve la altura del elemento
console.log(divMeasures);
const newMeasure = divMeasures / 3;
console.log(newMeasure);
div.setAttribute('style', `height:${newMeasure}`);
console.log(div);

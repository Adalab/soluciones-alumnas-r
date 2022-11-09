'use strict';

const numbers = [1, 2, 3];

const list = document.querySelector('.js_items');

for (let i = 0; i < numbers.length; i++) {
  const newItem = document.createElement('li');
  const newContent = document.createTextNode(numbers[i]);
  newItem.appendChild(newContent);
  list.appendChild(newItem);
}

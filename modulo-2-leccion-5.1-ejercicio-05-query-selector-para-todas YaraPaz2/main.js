'use strict';

function getEl(a) {
  return document.querySelector(a);
}

// const getEl = (a) => document.querySelector(a);

const btnEl = getEl('.btn');
console.log(btnEl);

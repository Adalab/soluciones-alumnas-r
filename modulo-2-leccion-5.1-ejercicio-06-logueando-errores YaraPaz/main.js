'use strict';

function getEl(a) {
  const element = document.querySelector(a);
  if (element === null)
    console.error(
      `No existe ningún elemento con clase, id o tag llamado ${element}`
    );
  // Tambien se pueden utilizar console.log o alert
  else return element;
}

const btnEl = getEl('btn');
console.log(btnEl);

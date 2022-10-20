'use strict';

let dogAge;
let firstYear = 15;
let secondYear = 9;
let thirdYear = 5;

if (dogAge === 1) {
  console.log(`Tu perro tiene ${firstYear} años humanos`);
} else if (dogAge === 2) {
  console.log(
    'Tu perro tiene' + ' ' + (firstYear + secondYear) + ' ' + 'años humanos'
  );
} else if (dogAge >= 3) {
  console.log(
    'Tu perro tiene' +
      ' ' +
      (firstYear + secondYear + thirdYear * dogAge) +
      ' ' +
      'años humanos'
  );
}

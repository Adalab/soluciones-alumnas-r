'use strict';

let currentYear = 2020;
let yearCalc = currentYear % 4;
let hundredException = currentYear % 100;
let fourHundredException = currentYear % 400;

//Switch option less complete
switch (yearCalc) {
  case 0:
    console.log('El próximo año bisiesto será' + ' ' + (currentYear + 4));
    break;
  case 1:
    console.log('El próximo año bisiesto será' + ' ' + (currentYear + 3));
    break;
  case 2:
    console.log('El próximo año bisiesto será' + ' ' + (currentYear + 2));
    break;
  case 3:
    console.log('El próximo año bisiesto será' + ' ' + (currentYear + 1));
    break;
  case 4:
    console.log('Este año es bisiesto');
    break;
}

//If option more complete
if ((yearCalc === 0 && hundredException !== 0) || fourHundredException === 0) {
  console.log('El próximo año bisiesto será' + ' ' + (currentYear + 4));
} else if (
  (yearCalc === 1 && hundredException !== 1) ||
  fourHundredException === 1
) {
  console.log('El próximo año bisiesto será' + ' ' + (currentYear + 3));
} else if (
  (yearCalc === 2 && hundredException !== 2) ||
  fourHundredException === 2
) {
  console.log('El próximo año bisiesto será' + ' ' + (currentYear + 2));
} else if (
  (yearCalc === 3 && hundredException !== 3) ||
  fourHundredException === 3
) {
  console.log('El próximo año bisiesto será' + ' ' + (currentYear + 1));
} else if (
  (yearCalc === 4 && hundredException !== 4) ||
  fourHundredException === 4
) {
  console.log('El próximo año bisiesto será' + ' ' + (currentYear + 0));
}

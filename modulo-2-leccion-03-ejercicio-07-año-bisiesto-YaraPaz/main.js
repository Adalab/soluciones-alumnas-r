'use strict';

let currentYear = 2020;
let yearCalc = currentYear % 4;

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

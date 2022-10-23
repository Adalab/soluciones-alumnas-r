'use strict';

function vat(a) {
  return 'Precio sin IVA:' + a + ',' + 'IVA: 2,1 y Total:' + (a + 2.1);
}

const result = vat(20);
console.log(result);

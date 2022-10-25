'use strict';

// Ticket con IVA

function ivaCalc(x) {
    const ivaNum = 0.21;
    return (`Precio sin IVA : ${x}, IVA: ${ivaNum} y Total: ${x * ivaNum}`);
}

let result = ivaCalc(20);

console.log(result);



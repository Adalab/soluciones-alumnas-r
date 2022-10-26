'use strict';

const pearBasket = {
  maxNumber: 20,
  minNumber: 5,
  currentNumber: 10,
  initialNumber: 8,
  addPear: function () {
    return (this.currentNumber += 1);
  },
  removePear: function () {
    return (this.currentNumber -= 1);
  },
  resetPearNumber: function () {
    return (this.currentNumber = this.initialNumber);
  },
};

//Incluir siempre el return si quiero que me devuelva un valor

console.log(pearBasket.addPear());

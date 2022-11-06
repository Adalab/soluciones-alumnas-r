'use strict';

/* 4 Crear una cesta de peras
Vamos a crear un objeto que sea una cesta de peras y que debe tener varias propiedades:
Número máximo de peras
Número mínimo de peras
Número actual de peras
Número inicial de peras

Y varios métodos que hagan:
Añadir al cesto una pera
Sacar del cesto una pera
Restablecer el número de peras al valor inicial.

Con la ayuda de console.log probaremos a usar varios métodos distintos y comprobar el número actual de peras para ver si funciona correctamente. */

const pearBasket = {
    maxNumber : 20,
    minNumber : 5,
    currentNumber : 0,
    startNumber : 0, //si start no fuese 0, habría que añadir código a las funciones add y remove y cambiar el código de reset

    addPear: function (number) {
        return this.currentNumber += + number;
      },
    removePear: function (number) {
        return this.currentNumber = this.currentNumber - number;
      },
    resetPearNumber: function () {
        return this.currentNumber = this.startNumber;
      },
}


pearBasket.addPear(1);
console.log(pearBasket.currentNumber); //devuelve 1

pearBasket.addPear(3);
console.log(pearBasket.currentNumber); //devuelve 4

pearBasket.addPear(2);
console.log(pearBasket.currentNumber); //devuelve 6

pearBasket.removePear(4) ;
console.log(pearBasket.currentNumber); //devuelve 2

pearBasket.resetPearNumber();
console.log(pearBasket.currentNumber); //devuelve 0





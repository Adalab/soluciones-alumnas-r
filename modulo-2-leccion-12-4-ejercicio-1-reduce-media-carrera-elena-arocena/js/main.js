"use strict";

const times = [56, 9, 45, 28, 35];

const result = times.reduce((suma, number) => suma + number); //Sumatorio de los números en time. 
console.log(result);

const media = result / times.length; //Sacamos la media dividiendo la suma entre el número de elementos. 
console.log(media);

'use strict';

//Queremos conocer estadisticas sobre adalabers!!
//Crear objetos y arrays para manejar datos adalabers!!
// funcion- countadalabers

//Elements
const adalaber1 = {
  name: 'María',
  age: 29,
  job: 'diseñadora',
};
const adalaber2 = {
  name: 'Lucía',
  age: 31,
  job: 'ingeniera química',
};
const adalaber3 = {
  name: 'Susana',
  age: 34,
  job: 'periodista',
};
const adalaber4 = {
  name: 'Rocío',
  age: 25,
  job: 'actriz',
};
const adalaber5 = {
  name: 'Inmaculada',
  age: 21,
  job: 'diseñadora',
};

const adalabers = [adalaber1, adalaber2, adalaber3, adalaber4, adalaber5];

//Functions
function countAdalabers(array) {
  const numberOfAdalabers = array.length; //Cuidado con las erratas escribiendo
  return numberOfAdalabers;
}

function averageAge(array) {
  let agesSum = 0;
  for (i = 0; i < array.length; i++) {
    agesSum += array[i].age;
  }
  return agesSum / array.length;
}

function theYoungest(array) {
  let youngestAdalaber = '';
  for (i = 0; i < array.length; i++) {
    if (array[i].age === 21) {
      youngestAdalaber = array[i].name;
    }
  }
  return youngestAdalaber; //Cuidado: poner el return al final de la funcion, no dentro del FOR
}

function countDesigners(array) {
  let sumDesigners = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i].job === 'diseñadora') {
      sumDesigners++;
    }
  }
  return sumDesigners;
}

countAdalabers(adalabers);
averageAge(adalabers);
theYoungest(adalabers);
countDesigners(adalabers);

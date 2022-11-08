'use strict';

const promos = [
  {
    promo: 'A',
    name: 'Ada',
    students: [
      {
        id: 'id-1',
        name: 'Sofía',
        age: 20,
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21,
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22,
      },
    ],
  },
  {
    promo: 'B',
    name: 'Borg',
    students: [
      {
        id: 'id-4',
        name: 'Julia',
        age: 23,
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24,
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25,
      },
    ],
  },
  {
    promo: 'C',
    name: 'Clarke',
    students: [
      {
        id: 'id-7',
        name: 'Lidia',
        age: 26,
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27,
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28,
      },
    ],
  },
];

const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];

// TÚ CÓDIGO AQUÍ
const results = document.querySelector('.js_result');
const list = document.querySelector('.js_list');
let html = '';

//Pintar en pantalla nombre de las promos y nombre y edad de las alumnas
//1. Debo diferenciar sobre que nuevo LI o UL se va a llevar a cabo la impresión utilizando el id o nombre de alguno de los objetos como garantía o atributo gancho
//2. resetear las variables acumuladoras o contadoras a cero antes de empezar un bucle si no quiero que vayan acumulando toda la info que vaya pasando sobre ellas.

for (const promo of promos) {
  let promoName = promo.name;
  console.log(promoName);
  let students = promo.students;
  console.log(students);
  let promoLetter = promo.promo;
  results.innerHTML += `<li class="js_li${promoLetter}"></li>`;
  const li = document.querySelector(`.js_li${promoLetter}`);
  li.innerHTML += `<p>Nombre: ${promoName}</p><ul class="js_list${promoLetter}"></ul>`;
  const list2 = document.querySelector(`.js_list${promoLetter}`);
  html = '';
  for (const student of promo.students) {
    html += `<li>${student.name}, ${student.age}</li>`;
  }
  list2.innerHTML += html;
}

// Pintar en pantalla los nombres de las promos y los nombres, la edad y el id de las alumnas
for (const promo of promos) {
  let promoName = promo.name;
  console.log(promoName);
  let students = promo.students;
  console.log(students);
  let promoLetter = promo.promo;
  results.innerHTML += `<li class="js_li${promoLetter}"></li>`;
  const li = document.querySelector(`.js_li${promoLetter}`);
  li.innerHTML += `<p>Nombre: ${promoName}</p><ul class="js_list${promoLetter}"></ul>`;
  const list2 = document.querySelector(`.js_list${promoLetter}`);
  html = '';
  for (const student of promo.students) {
    html += `<li id="${student.id}">${student.name}, ${student.age}</li>`;
  }
  list2.innerHTML += html;
}

//Pintar en pantalla los nombres de las promos y los nombres, la edad y el id de las alumnas que tenga edad par
for (const promo of promos) {
  let promoName = promo.name;
  console.log(promoName);
  let students = promo.students;
  console.log(students);
  let promoLetter = promo.promo;
  results.innerHTML += `<li class="js_li${promoLetter}"></li>`;
  const li = document.querySelector(`.js_li${promoLetter}`);
  li.innerHTML += `<p>Nombre: ${promoName}</p><ul class="js_list${promoLetter}"></ul>`;
  const list2 = document.querySelector(`.js_list${promoLetter}`);
  html = '';
  for (const student of promo.students) {
    if (student.age % 2 === 0) {
      html += `<li id="${student.id}">${student.name}, ${student.age}</li>`;
    }
  }
  list2.innerHTML += html;
}

//Pintar en pantalla los nombres de las promos y los nombres la edad y el id de las alumnas que trabajan en Google
for (const promo of promos) {
  let promoName = promo.name;
  console.log(promoName);
  let students = promo.students;
  console.log(students);
  let promoLetter = promo.promo;
  results.innerHTML += `<li class="js_li${promoLetter}"></li>`;
  const li = document.querySelector(`.js_li${promoLetter}`);
  li.innerHTML += `<p>Nombre: ${promoName}</p><ul class="js_list${promoLetter}"></ul>`;
  const list2 = document.querySelector(`.js_list${promoLetter}`);
  html = '';
  for (const student of promo.students) {
    if (
      student.id === 'id-2' ||
      student.id === 'id-3' ||
      student.id === 'id-5' ||
      student.id === 'id-9'
    ) {
      html += `<li id="${student.id}">${student.name}, ${student.age}</li>`;
    }
  }
  list2.innerHTML += html;
}

//Pintar en pantalla los nombres de las promos y los nombres, la edad, el id de las alumnas y pintar el id de la alumna en consola cuando se haga click en una de ellas

function paintPromos() {
  for (const promo of promos) {
    let promoName = promo.name;
    console.log(promoName);
    let students = promo.students;
    console.log(students);
    let promoLetter = promo.promo;
    results.innerHTML += `<li class="js_li${promoLetter}"></li>`;
    const li = document.querySelector(`.js_li${promoLetter}`);
    li.innerHTML += `<p>Nombre: ${promoName}</p><ul class="js_list${promoLetter}"></ul>`;
    const list2 = document.querySelector(`.js_list${promoLetter}`);
    html = '';
    for (const student of promo.students) {
      html += `<li id="${student.id}">${student.name}, ${student.age}</li>`;
    }
    list2.innerHTML += html;
  }
}

function handleClick(ev) {
  const clickedElId = ev.target.id;
  console.log(clickedElId);
}

paintPromos();

results.addEventListener('click', handleClick);

//Ejercicio 1 voy por la vuelta x

for (let i = 1; i < 11; i++) {
  console.log(i);
}

//ejercicio 2 contando de dos en dos
let acc = 0;
for (let i = 0; i < 10; i++) {
  acc += 2;
}
console.log('El resultado es ' + acc);

// Ejercicio 3 Prevision para ver la luna del cazador
let lunaCazador = 2017;
for (let i = 0; i < 15; i++) {
  lunaCazador = lunaCazador + 3;
  console.log(lunaCazador);
}

//Ejercicio 4 La media

const numbers1 = [2, 31, 39, 13, 25, 80, 20];
const numbers2 = [2, 31, 39, 13, 25, 80, 20, 80, 90];

function average(numbers) {
  let acumuladora = 0;
  for (i = 0; i < numbers.length; i++) {
    acumuladora += numbers[i];
  }
  let media = acumuladora / numbers.length;
  return media;
}
console.log(average(numbers1));
console.log(average(numbers2));

//Ejercicio 5  Tenemos mucho en común
const label1_element = document.querySelector('.js_label1');
const label2_element = document.querySelector('.js_label2');
const input1_element = document.querySelector('.js_input1');
const input2_element = document.querySelector('.js_input2');
const btn_element = document.querySelector('.js_btn');
const text_element = document.querySelector('.js_text');

btn_element.addEventListener('click', (event) => {
  event.preventDefault();
  const input1 = input1_element.value;
  const input2 = input2_element.value;

  books[books.length] = input1;
  books[books.length] = input2;

  text_element.innerHTML = `¡A mí también me encantó  ${books[0]}  y  ${books[1]} ! Tenemos mucho en común, humana.`;
  console.log(books);
});

let books = [];

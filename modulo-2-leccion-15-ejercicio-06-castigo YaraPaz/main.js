'use strict';

const main = document.querySelector('.js_main');

for (let i = 0; i < 100; i++) {
  const text = document.createElement('p');
  const textContent = document.createTextNode(
    'He aprendido bien cómo funcionan los bucles'
  );
  text.appendChild(textContent);

  const select = document.createElement('select');
  const option1 = document.createElement('option');
  const option2 = document.createElement('option');
  const option3 = document.createElement('option');
  const option4 = document.createElement('option');
  const option5 = document.createElement('option');
  const option6 = document.createElement('option');
  const optionText1 = document.createTextNode('Blanco');
  const optionText2 = document.createTextNode('Azul');
  const optionText3 = document.createTextNode('Rojo');
  const optionText4 = document.createTextNode('Verde');
  const optionText5 = document.createTextNode('Amarillo');
  const optionText6 = document.createTextNode('Rosa');
  option1.appendChild(optionText1);
  option2.appendChild(optionText2);
  option3.appendChild(optionText3);
  option4.appendChild(optionText4);
  option5.appendChild(optionText5);
  option6.appendChild(optionText6);
  option1.setAttribute('value', '1');
  option2.setAttribute('value', '2');
  option3.setAttribute('value', '3');
  option4.setAttribute('value', '4');
  option5.setAttribute('value', '5');
  option6.setAttribute('value', '6');
  console.log(option1);
  select.append(option1, option2, option3, option4, option5, option6);
  text.appendChild(select);
  main.appendChild(text);
  listenSelect();
}

function handleChange(ev) {
  const selectValue = ev.currentTarget.value;
  console.log(selectValue);
  const text = document.querySelector('p');
  if (selectValue === '1') {
    text.classList.add('white');
  } else if (selectValue === '2') {
    text.classList.add('blue');
  } else if (selectValue === '3') {
    text.classList.add('red');
  } else if (selectValue === '4') {
    text.classList.add('green');
  } else if (selectValue === '5') {
    text.classList.add('yellow');
  } else if (selectValue === '6') {
    text.classList.add('pink');
  }
}

function listenSelect() {
  const select = document.querySelector('select');
  select.addEventListener('change', handleChange);
}

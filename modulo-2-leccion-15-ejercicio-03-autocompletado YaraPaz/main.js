'use strict';

const info = [
  {
    name: 'Yara',
    surname: 'Paz',
    phone: '777',
  },
  {
    name: 'Sara',
    surname: 'Rivera',
    phone: '888',
  },
  {
    name: 'Monica',
    surname: 'Hidalgo',
    phone: '999',
  },
];
const select = document.querySelector('.js_select');
const selectValue = select.value;
const inputName = document.querySelector('.js_input-name');
const inputSurname = document.querySelector('.js_input-surname');
const inputPhone = document.querySelector('.js_input-phone');

function handleChange() {
  const selectValue = select.value;
  if (selectValue === '1') {
    inputName.value = info[0].name;
    inputSurname.value = info[0].surname;
    inputPhone.value = info[0].phone;
  } else if (selectValue === '2') {
    inputName.value = info[1].name;
    inputSurname.value = info[1].surname;
    inputPhone.value = info[1].phone;
  } else if (selectValue === '3') {
    inputName.value = info[2].name;
    inputSurname.value = info[2].surname;
    inputPhone.value = info[2].phone;
  }
}

select.addEventListener('change', handleChange);

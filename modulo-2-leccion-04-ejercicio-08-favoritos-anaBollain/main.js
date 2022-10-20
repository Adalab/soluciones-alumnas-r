'use strict';


const listElementOne = document.querySelector('.teacher--isra');

const listElementTwo = document.querySelector('.teacher--tuerto');

const listElementThree = document.querySelector('.teacher--nasi');

const textElementOne = listElementOne.querySelector('.favorite');

const textElementTwo = listElementTwo.querySelector('.favorite');

const textElementThree = listElementThree.querySelector('.favorite');


listElementOne.addEventListener('click',()=>{
    listElementOne.classList.toggle('teacher--selected');
    if (textElementOne.innerHTML === 'Añadir'){
        textElementOne.innerHTML = 'Quitar';
    }else{
        textElementOne.innerHTML = 'Añadir';
    }
});

listElementTwo.addEventListener('click',()=>{
    listElementTwo.classList.toggle('teacher--selected');
    if (textElementTwo.innerHTML === 'Añadir'){
        textElementTwo.innerHTML = 'Quitar';
    }else{
        textElementTwo.innerHTML = 'Añadir';
    }
});

listElementThree.addEventListener('click',()=>{
    listElementThree.classList.toggle('teacher--selected');
    if (textElementThree.innerHTML === 'Añadir'){
        textElementThree.innerHTML = 'Quitar';
    }else{
        textElementThree.innerHTML = 'Añadir';
    }
});
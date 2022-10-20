const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const buttonElement = document.querySelector('.button');

const listElement = document.querySelector('.list');

const listItem = document.querySelector('.list__item');

buttonElement.addEventListener('click', ()=>{
    listElement.innerHTML  = `<li class="pepe">${inception}</li><li>${theButterFlyEffect}</li><li>${eternalSunshineOfTheSM}</li><li>${blueVelvet}</li><li>${split}</li>`;
    document.querySelector('.pepe').addEventListener('click', ()=>{
        listItem.innerHTML =`La peli seleccionada es: Inception`;
    })
});



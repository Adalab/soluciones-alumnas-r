//constantes de pelis
const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split  = 'Split';

//constantes de partes del HTML
const btn = document.querySelector(".start");
const filmText = document.querySelector(".list-films");
const text = document.querySelector(".text");

btn.addEventListener('click', ()=>{
    filmText.innerHTML= `<ul class="js-list"><li>${inception}</li><li>${theButterFlyEffect}</li><li>${eternalSunshineOfTheSM}</li> <li>${blueVelvet}</li><li>${split}</li>`   //esto hace que se cree la lista
    filmText.addEventListener('click', (event)=>{       
        const selectedFilm = event.target.innerHTML; //almacena el valor en el que se hace click
        text.innerHTML = `la peli seleecionada es: ${selectedFilm}`;

    });
});


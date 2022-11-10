//URL base del API:
//https://swapi.py4e.com/api/

//si necesita autenticación:
// Swapi is a completely open API. No authentication is required to query and get data. This also means that we've limited what you can do to just GET-ing the data. If you find a mistake in the data, then tweet the person supporting the site.

//método HTTP que deben usar las peticiones a este API
// http swapi.py4e.com/api/planets/1/

//URL para acceder a la info del personaje "Luke Skywalker"
//https://swapi.py4e.com/api/people/?search=Luke%20Skywalker

//URL para acceder a la info de la película "A New Hope"
//https://swapi.py4e.com/api/films/?search=A%20New%20Hope

//a qué otros recursos puedo acceder desde el API además de personajes y pelis
// {
//     "films": "https://swapi.py4e.com/api/films/",
//     "people": "https://swapi.py4e.com/api/people/",
//     "planets": "https://swapi.py4e.com/api/planets/",
//     "species": "https://swapi.py4e.com/api/species/",
//     "starships": "https://swapi.py4e.com/api/starships/",
//     "vehicles": "https://swapi.py4e.com/api/vehicles/"
// }

// URL para acceder al listado de personajes, ¿está paginada?: SI
//  "count": 87,
// "next": "https://swapi.py4e.com/api/people/?page=2",
// "previous": null,
// "results": [

//cómo puedo buscar personajes mediante la URL:
// /people/ -- get all the people resources
// /people/:id/ -- get a specific people resource
// /people / schema / --view the JSON schema for this resource

// cómo puedo hacer que el JSON de una petición se me devuelva traducido a Wookiee:
// https://swapi.py4e.com/api/planets/1/?format=wookiee

'use strict';

const btn = document.querySelector('.js_btn');
const list = document.querySelector('.js_list');
const input = document.querySelector('.js_input');
let data = [];

function renderCharacter(characters) {
  // a esta función le pasamos el parámetro characters para que dependiendo del array que le pase imprima unos elementos del array u otros
  let html = '';
  for (const character of characters) {
    html += `<li>${character.name}</li><li>${character.gender}</li>`;
  }
  console.log(html);
  list.innerHTML = html;
}

function handleClick(ev) {
  ev.preventDefault();
  const dataLS = JSON.parse(localStorage.getItem('characters'));

  if (dataLS !== null) {
    // si está guardado me lo imprime
    renderCharacter(dataLS);
  } else {
    //si el valor no está guardado en el local storage me lo guarda
    const inputValue = input.value;
    fetch(`https://swapi.py4e.com/api/people/?search=${inputValue}`)
      .then((response) => response.json())
      .then((characters) => {
        console.log(characters);
        data = characters.results; //al parametro le pondremos el nombre que queramos y luego guardaremos sus resultados en data
        renderCharacter(data);
        localStorage.setItem('characters', JSON.stringify(data)); //le pedimos que despues de pintarlo lo guarde en el localstorage
      });
  }
}

btn.addEventListener('click', handleClick);

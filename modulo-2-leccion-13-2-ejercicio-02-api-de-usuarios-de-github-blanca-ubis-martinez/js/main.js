'use strict';

/***ELEMENTOS HTML***/

//form
const inputUser = document.querySelector('.js-input-user');
const btnSearch = document.querySelector('.js-btn-search');

//results
const resultsSection = document.querySelector('.js-results');
const nameElement = document.querySelector('.js-name');
const photoElement = document.querySelector('.js-photo');
const repoElement = document.querySelector('.js-repo');

/***FUNCIONES***/

//función que construye la URL de la API
//uniéndole el nombre de usuario que
//se haya rellenado en el input
function getApiUrl() {
  const apiUrl = `https://api.github.com/users/${inputUser.value}`;
  return apiUrl;
}

//printUserData es una función que recibe
//el resultado del fetch a la API de github
// y lo muestra por pantalla
function printUserData(data) {
  //preguntamos si la API nos devuelve
  //un usuario relleno porque existe,
  //o si está vacío porque no existe
  if (data.login) {
    //mostramos la sección de resultados
    resultsSection.classList.remove('hidden');
    //pintamos los elementos devueltos por la API
    nameElement.innerHTML = data.login;
    photoElement.src = data.avatar_url;
    photoElement.alt = `Foto de ${data.login}`;
    repoElement.innerHTML = data.public_repos;
  } else {
    //escondemos la sección de resultados
    resultsSection.classList.add('hidden');
  }
}

function getUserData(event) {
  event.preventDefault();
  //preguntamos si el input está vacío o relleno
  //si está relleno, ejecutamos el código
  if (inputUser.value) {
    const apiUrl = getApiUrl();
    fetch(apiUrl)
      .then((response) => response.json())
      .then(printUserData);
  }
}

/***EVENTOS***/
btnSearch.addEventListener('click', getUserData);

"use strict";

function getUserProfile() {
  fetch(`https://api.github.com/users/${nameUserSearch.value}`)
 
    .then((response) => response.json())
    .then((data) => {
      const imgUser = document.querySelector('.js-img');
      imgUser.src = data.avatar_url;
      imgUser.alt = 'Un usuario';

      const nameUser = document.querySelector('.js-name');
      nameUser.innerHTML= data.login;
      
      const numberUser = document.querySelector('.js-number');
      numberUser.innerHTML= data.public_repos;

    });
}
const btn = document.querySelector('.js-button');
const nameUserSearch = document.querySelector('.js-name_search');
btn.addEventListener('click', getUserProfile);


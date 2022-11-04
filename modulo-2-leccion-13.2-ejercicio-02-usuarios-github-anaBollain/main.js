'use strict';

const btnEl = document.querySelector('.js-btn');
const inputEl = document.querySelector('.js-input');
const ulList = document.querySelector('.js-list');


function getUser(event){
    event.preventDefault();
    const inputValue = inputEl.value;   
    fetch (`https://api.github.com/users/${inputValue}`)
            .then ((response) => response.json())
            .then ((data) => {
                //Condición, si el usuario no existe github devuelve name = null
                if (data.name !== null){
                    console.log(data)
                    const item = `Resultados:
                    <li>Nombre usuario: ${data.name}</li>
                    <li>Número de repositorios: ${data.public_repos}</li>
                    <li>Avatar: <img src="${data.avatar_url}" style="width:300px; height:300px;"></li>`;
                    ulList.innerHTML = item;
                }else{
                    ulList.innerHTML = `No existe ningún usuario con ese nombre`;
                }
            });       
};

btnEl.addEventListener('click', getUser);

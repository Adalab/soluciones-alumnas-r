"use strict";

const listEl = document.querySelector(".js-list");

const createPromise = () =>
    fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
    response.json()
    );

function getBreedImages() {
    const promises = [createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise(), createPromise()];
    console.log(promises);
    Promise.all(promises).then((responses) => {
        let content = '';
        for (let i = 0; i < responses.length; i++) {
            let img = `<li><img class="${'.dog' + (i + 1)}" src="${responses[i].message}" alt="${'Dog' + (i + 1)}" style="width:100px; height:100px; object-fit: cover"/></li>`
            content += img;
        }
        listEl.innerHTML = content;
    });
}
const btn = document.querySelector(".js-btn");
btn.addEventListener("click", getBreedImages);

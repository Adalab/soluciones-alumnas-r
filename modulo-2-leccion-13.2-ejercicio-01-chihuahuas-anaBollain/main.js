'use strict';

function getChihuahua(){
    fetch ('https://dog.ceo/api/breed/chihuahua/images/random')
        .then((response)=> response.json())
        .then((data)=> {
            console.log(data);
            const imgEl = document.querySelector('.js-img');
            imgEl.src = data.message;
            imgEl.alt = 'Chihuahua dog'; 
        });
};


document.querySelector('.js-btn').addEventListener('click', getChihuahua);
'use strict';

const containerElement = document.querySelector('.container');


document.addEventListener('scroll',()=>{
    if(window.scrollY > 250){
    containerElement.classList.add('containerOne');
    containerElement.classList.remove('containerTwo');
}else{
    containerElement.classList.add('containerTwo');
    containerElement.classList.remove('containerOne');
}
});


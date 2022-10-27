const input1 = document.querySelector('.js-input1');
const input2 = document.querySelector('.js-input2');
const btn = document.querySelector('.js-btn');
const htmlText = document.querySelector('.js-text');

const favoriteBooks=[];

//funcion para recoger datos en un array
function value() {
    favoriteBooks[0]=input1.value;
    favoriteBooks[1]=input2.value;    
}

//funcion para pintar en HTML
function handleClick (){
    value();
    for (const book of favoriteBooks){
    htmlText.innerHTML = htmlText.innerHTML+ `¡A mi también me encantó ${book}! `;
    }
}
//evento de escucha

btn.addEventListener('click',handleClick)


//habria que meter un if para que no pintara si no hay input, o más fácil que no lo guardara en el array


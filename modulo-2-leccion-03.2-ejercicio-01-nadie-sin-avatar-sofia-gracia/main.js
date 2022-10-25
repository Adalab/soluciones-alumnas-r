'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.jp/150x150.png';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';


//llamar al HTML que contiene la foto
const avatar = document.querySelector (".user__avatar");


//meter una variable dentro de otra

avatar.src =  `${userAvatar || DEFAULT_AVATAR}`; //si la primera variable es false (null o undefined) pon la segunda.

/* puedes espeficiar el src de una imagen así:
const avatar = document.querySelector (".user__avatar").src = 'http://www.fillmurray.com/300/300';
pero dependiendo de lo que necesites, es posible que no sea una buena práctica*/

/*Puedes llamar a cualquier atributo de la imagen/elemento HTML con el .loquesea
por ejemplo avatar.alt etc.*/
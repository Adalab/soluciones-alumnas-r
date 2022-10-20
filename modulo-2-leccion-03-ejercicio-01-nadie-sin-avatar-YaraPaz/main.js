'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.jp/150x150.png';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';
// let userAvatar = '';

const avatarImg = document.querySelector('.user__avatar');
const userAvatarChosen = false;
userAvatar = userAvatarChosen && 'http://www.fillmurray.com/300/300';
avatarImg.setAttribute('src', `${userAvatar || DEFAULT_AVATAR}`);

'use strict';

const DEFAULT_AVATAR = 'http://placehold.jp/150x150.png';
let userAvatar = 'http://www.fillmurray.com/300/300';
// let userAvatar = '';
const avatarImg = document.querySelector('.user__avatar');

// avatarImg.setAttribute('src', `${userAvatar || DEFAULT_AVATAR}`);
avatarImg.src = userAvatar || DEFAULT_AVATAR;
//si User Avatar está vacío, entonces se utilizará default_avatar. Si userAvatar no está vacío, entonces se utilizará userAvatar

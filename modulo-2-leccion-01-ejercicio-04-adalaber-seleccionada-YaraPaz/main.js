'use strict';

const ChosenAdalaberMessage = document.querySelector('.title');
// const ChosenAdalaber = document.querySelector(".chosen1");
// ChosenAdalaberMessage.innerHTML =
//   ChosenAdalaberMessage.innerHTML + ":" + " " + ChosenAdalaber.innerHTML;
const chosenAdalaber = document.querySelector('.chosen1').innerHTML;
ChosenAdalaberMessage.innerHTML += ':' + ' ' + chosenAdalaber;

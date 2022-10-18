"use strict";

let partnerName = "Laura";
let partnerSurname = "Valdenebro";

const message = document.querySelector(".parr");
message.innerHTML =
  `The name of my partner is ${partnerName} ${partnerSurname}` +
  " " +
  "and its compound of" +
  " " +
  (partnerName.length + partnerSurname.length) +
  " " +
  "characters";

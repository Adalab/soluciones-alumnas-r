const result = document.querySelector('.js-result');
const img = document.querySelector('.img');
const btn = document.querySelector('.js-btn');
const btn2 = document.querySelector('.js-btn-2');

function getNumber() {
  fetch('https://api.rand.fun/number/integer?min=0&max=10')
    .then((response) => response.json())
    .then((data) => {
      result.innerHTML = data.result;
    });
}

function getBulldog() {
  fetch('https://dog.ceo/api/breed/bulldog/images/random')
    .then((response) => response.json())
    .then((data) => {
      img.src = data.message;
      // document.body.innerHTML = `<img src=${data.message}>`;
    });
}

btn.addEventListener('click', getNumber);
btn2.addEventListener('click', getBulldog);

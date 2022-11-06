const btn = document.querySelector('.js-btn');

const createPromise = () =>
  fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
    response.json()
  );

function getBreedImages() {
  const promises = [
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
    createPromise(),
  ];
  Promise.all(promises).then((responses) => {
    for (let i = 0; i < responses.length; i++) {
      document.body.innerHTML += `<img src=${responses[i].message} alt="perrete">`;
    }
  });
}

btn.addEventListener('click', getBreedImages);

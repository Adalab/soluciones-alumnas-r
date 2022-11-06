const resultGitHub = document.querySelector('.js-result-github');
const inputGitHub = document.querySelector('.js-github');
const btn = document.querySelector('.js-btn-github');

function getGitHub() {
  const searchResult = inputGitHub.value;
  console.log(searchResult);
  fetch(`https://api.github.com/users/${searchResult}`)
    .then((response) => response.json())
    .then((data) => {
      document.body.innerHTML += `<h2>Nombre de usuario</h2>
      <p>${data.login}</p>
      <h2>Avatar</h2>
      <img src=${data.avatar_url} alt="foto de perfil" target="_blank">
      <h2>Número de repositorios</h2>
      <p>${data.public_repos}</p>
      `;
    });
}

btn.addEventListener('click', getGitHub);

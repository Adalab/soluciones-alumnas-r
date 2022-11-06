'use strict';
//Elements
const inputEl = document.querySelector('.js_input');
const btn = document.querySelector('.js_github_user');
const infoSection = document.querySelector('.js_section');

//Functions
function getGithubUserInfo(ev) {
  ev.preventDefault();
  const inputValue = inputEl.value;
  fetch(`https://api.github.com/users/${inputValue}`) //cuidado con incluir el punto al final porque sino no funciona. La dirección tiene que ser tal cual la api la aplica.
    .then((response) => response.json())
    .then((data) => {
      let name = data.login;
      let avatar = data.avatar_url;
      let reposNumber = data.public_repos;
      let info = '';

      if (name !== undefined) {
        info += '<article>';
        info += '<h3>Name</h3>';
        info += `<p>${name}</p>`;
        info += '<h3>Profile Picture</h3>';
        info += `<img src="${avatar}" alt="github's user's pic">`;
        info += '<h3>Number of repositories</h3>';
        info += `<p>${reposNumber}</p>`;
        info += '</article>';
        infoSection.innerHTML = info;
      } else {
        info = "The user doesn't exist, try again";
        infoSection.innerHTML = info;
      }
    });
}

//Events
btn.addEventListener('click', getGithubUserInfo);

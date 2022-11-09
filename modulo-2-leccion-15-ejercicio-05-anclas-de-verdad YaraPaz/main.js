'use strict';

const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('.section');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', (ev) => {
    ev.preventDefault();
    for (let j = 0; j < sections.length; j++) {
      if (i === j) {
        let sectionPosition = sections[j].getBoundingClientRect();
        window.scrollTo(sectionPosition);
      }
    }
  });
}

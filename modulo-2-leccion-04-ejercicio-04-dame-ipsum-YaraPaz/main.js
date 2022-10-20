'use strict';

const ipsumText = document.querySelector('.text');

ipsumText.addEventListener('click', () => {
  console.log(
    console.log(
      (ipsumText.innerHTML = ipsumText.innerHTML + ipsumText.innerHTML)
    )
  );
});

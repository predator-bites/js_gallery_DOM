'use strict';

const largeImg = document.querySelector('body .gallery div #largeImg');
const ulImgs = document.querySelector('body .gallery .gallery__list');

ulImgs.addEventListener('click', (evnt) => {
  event.preventDefault();

  if (evnt.target.localName !== 'img' && evnt.target.localName !== 'a') {
    return;
  }

  if (evnt.target.localName === 'img') {
    largeImg.setAttribute('src', evnt.target.closest('a').href);
  } else {
    largeImg.setAttribute('src', evnt.target.href);
  }
});

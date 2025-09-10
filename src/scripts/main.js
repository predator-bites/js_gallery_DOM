'use strict';

const largeImg = document.querySelector('body .gallery div #largeImg');
const ulImgs = document.querySelector('body .gallery .gallery__list');

if (
  ulImgs !== null &&
  typeof ulImgs !== 'undefined' &&
  largeImg !== null &&
  typeof largeImg !== 'undefined'
) {
  ulImgs.addEventListener('click', (evnt) => {
    evnt.preventDefault();

    if (evnt.target.localName !== 'img' && evnt.target.localName !== 'a') {
      return;
    }

    if (evnt.target.localName === 'img') {
      const linkToelem = evnt.target.closest('a');

      if (linkToelem) {
        largeImg.setAttribute('src', linkToelem.href);
      }
    } else {
      largeImg.setAttribute('src', evnt.target.href);
    }
  });
}

// Este es el punto de entrada de tu aplicacion

import { homeTemp } from './templates/home.js';
import { changeRouter } from './router.js';

const start = () => {
  document.getElementById('root').appendChild(homeTemp());

  window.addEventListener('hashchange', () => {
    /* myFunction(); */
    changeRouter(window.location.hash);
  });
};

window.addEventListener('load', start);

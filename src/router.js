import { homeTemp } from './templates/home.js';
import { loginGoogle } from './templates/logingoogle.js';
import { accountTemp } from './templates/account.js';
import { postTemp } from './templates/post.js';

const showTemplate = (hash) => {
 console.log("muestra vista")
  const root = document.getElementById('root');
  switch (hash) {
    case '#/Home':
      root.appendChild(homeTemp());
      break;
    case '#/Crearcuenta':
      root.appendChild(accountTemp());
      break;
    case '#/Post':
      root.appendChild(postTemp());
      break;
    default:
      root.innerHTML = `<h2>Página no existe</h2>`;
  };
};

export const changeRouter = (hash) => {
  if (hash === '#/Home') {
    return showTemplate(hash);
  } if (hash === '#/Crearcuenta') {
    return showTemplate(hash);
  } if (hash === '#/Post') {
    return showTemplate(hash);
  } else {
    return showTemplate(hash);
}
};
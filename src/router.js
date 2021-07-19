import { homeTemp } from './templates/home.js';
import { loginGoogle, singIn } from './lib/firebase.js';
import { accountTemp } from './templates/account.js';
import { postTemp } from './templates/post.js';

const showTemplate = (hash) => {
 //console.log("muestra vista")
  const root = document.getElementById('root');
  switch (hash) {
    case '#/':
      root.innerHTML = '';
      root.appendChild(homeTemp());
      break;
    case '#/Crearcuenta':
      root.innerHTML = '';
      root.appendChild(accountTemp());
      break;
    case '#/Logingoogle':
      root.innerHTML = '';
      root.appendChildl(loginGoogle());
      break;
    case '#/Entrar':
      root.innerHTML = '';
      root.appendChildl(singIn());
      break;
    case '#/Post':
      root.innerHTML = '';
      root.appendChild(postTemp());
      break;
    default:
      root.innerHTML = `<h2>Página no existe</h2>`;
  };
};

export const changeRouter = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  } if (hash === '#/Crearcuenta') {
    return showTemplate(hash);
  } if (hash === '#/Logingoogle') {
    return showTemplate(hash);
  } if (hash === '#/Entrar') {
    return showTemplate(hash);
  } if (hash === '#/Post') {
    return showTemplate(hash);
  } else {
    return showTemplate(hash);
  };
};
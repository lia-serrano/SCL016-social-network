import { loginGoogle, singIn } from '../lib/firebase.js';
import { accountTemp } from './account.js';

export const homeTemp = () => {
  const divHome = document.createElement('div');
  const home = `
    <main id="homeMain">
   <section id="startHome">
   <header>
   <img class="logo" src="./img/logo.png">
   <h1>Bienvenidos</h1>
   </header>
   </section>

   <section id="centerHome">
    <input type="email" id="emailEntry" placeholder="Ingresa tu email">
    <input type="password" id="passEntry" placeholder="Ingresa tu contraseña">
    <button id="btnEntry">Ingresar</button>
   </section>

   <section id="endHome">
    <a href="#/Crearcuenta" id="createAccount">Regístrate</a>
    <input id="btnGoogle" src="./img/google-logo.png" type="image" alt="Ingresar con Google">
   </section>
   </main>  
   `;
  divHome.innerHTML = home;

  const btnG = divHome.querySelector('#btnGoogle');
  btnG.addEventListener('click', () => {
    loginGoogle();
  });

  const btnE = divHome.querySelector('#btnEntry');
  btnE.addEventListener('click', () => {
    const mail = divHome.querySelector('#emailEntry').value;
    const pass = divHome.querySelector('#passEntry').value;
    singIn(mail, pass);
  });

  const btnRegister = divHome.querySelector('#createAccount');
  btnRegister.addEventListener('click', () => {
    accountTemp();
  });

  return divHome;
};

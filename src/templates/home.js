import { loginGoogle } from './logingoogle.js';
//import { singIn } from './singIn.js';

export const homeTemp = () => {
  const divHome = document.createElement('div');
  const home = `
    <main id="">
   <section id="">
   <header>
   <img class="logo" src="./img/logo.png">
   <h1>Bienvenidos</h1>
   </header>
   </section>

   <section>
    <h2>Ingresa a tu cuenta</h2>
    <input type="email" id="emailEntry" placeholder="Ingresa tu email">
    <input type="password" id="passEntry" placeholder="Ingresa tu contraseña">
    <button id="btnEntry">Ingresar</button>
   </section>

   <section>
    <a href="#/Crearcuenta" id="createAccount">Regístrate</a>
    <input id="btnGoogle" src="./img/google-logo.png" type="image" alt="Ingresar con Google">
   </section>
   </main>  
   `
  divHome.innerHTML = home;

  const btnG = divHome.querySelector('#btnGoogle');
  btnG.addEventListener('click', () => {
    loginGoogle();
  });

  /*const btnE = divHome.querySelector('#btnEntry');
  btnE.addEventListener('click', () => {
    singIn();
  }); */
  return divHome;
};

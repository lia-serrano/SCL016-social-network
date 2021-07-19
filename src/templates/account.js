import { createUserNew } from "../lib/firebase.js";
import { homeTemp } from "./home.js";

export const accountTemp = () => {
  const divCreateAccount = document.createElement('div');
  const createAccount = `
    <main id="accountMain">
   <section id="starAccount">
   <header>
   <img class="logo" src="./img/logo.png">
   </header>
   </section>

   <section id="centerAccount">
    <h2>Regístrate</h2>
    <input type="name" id="nameCreate" placeholder="Ingresa tu nombre">
    <input type="email" id="emailCreate" placeholder="Ingresa tu email">
    <input type="password" id="passCreate" placeholder="Ingresa tu contraseña">
    <button id="btnCreate">Regístrar</button>
   </section> 
   `;
  divCreateAccount.innerHTML = createAccount;

  const btnCreateUser = divCreateAccount.querySelector('#btnCreate');
  btnCreateUser.addEventListener('click', () => {
    const email = document.getElementById('emailCreate').value;
    const password = document.getElementById('passCreate').value;
    createUserNew(email, password);
    homeTemp();
  });

  return divCreateAccount;
};

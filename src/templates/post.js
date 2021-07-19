import { addPost, viewPost } from "../lib/firebase.js";
import { listPostTemp } from "./listPost.js";

export const postTemp = () => {
  const divPost = document.createElement('div');
  const post = `
  <main id="postMain">
  <section id="startPost">
   <header>
   <img class="logo" src="./img/logo.png">
   </header>
   </section>

   <section id="centerPost">
   <form id="newPost">
   </form>
   <button id="btnPost">Publicar</button>
   </section> 

   <section id="public">
   </section>
   </main>  
   `;
  divPost.innerHTML = post;

  const btnPosts = divPost.querySelector('#btnPost');
  btnPosts.addEventListener('click', () => {
    const textPost = divPost.querySelector('#postText').value;
    listPostTemp(textPost);
    addPost(textPost);
  });
  viewPost();
  return divPost;
};

export const listPostTemp = (textPost) => {
  const list = document.getElementById('public');
  const listPost = document.createElement('div');
  listPost.innerHTML = `
  <section class="post">
    <input type="text" id="publicPost">
    <p class="content">${textPost.content}</p>
    </section>
    <section>
    <button type="button" class="btnEdit" value={id}>Editar</button>
    <button type="button" class="btnDelete" value={id}>Eliminar</button>
    </section>
    `;
  list.appendChild(listPost);
};

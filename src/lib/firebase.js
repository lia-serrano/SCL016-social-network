import { listPostTemp } from "../templates/listPost.js";
// Ingresar con usuario registrado
export const singIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.hash = '#/Post';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.location.hash = '#/';
    });
};

// Registrar usuario nuevo
export const createUserNew = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.hash = '#/';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

// Login con Google
export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      window.location.hash = '#/Post';
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
};
// Crear post
const db = firebase.firestore();

export const addPost = (textPost) => {
  db.collection('post').add({
    content: textPost,
  })
    .then(() => console.log('post added!'))
  window.location.hash = '#/Post';
};

// Traer coleccion de post
export const viewPost = () => {
  db.collection('post').onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      listPostTemp(doc.data(), doc.id);
    });
  });
};

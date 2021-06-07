export const postTemp = () => {
  const divPost = document.createElement('div');
  const post = `
  <main>
   <section id="">
   <input type="text" id="postentry">
   </section> 
   </main>  
   `
  divPost.innerHTML = post;
  return divPost;
};


/* service firebase.storage {
    match /b/{bucket}/o {
      match /{allPaths=**} {
        allow read, write: if request.auth != null;
      }
    }
  } */
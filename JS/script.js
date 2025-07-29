
const token = 'SEU_TOKEN_DE_ACESSO_AQUI';  // Substitua pelo seu token
const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink&access_token=${token}`;

const gallery = document.getElementById("gallery");
gallery.innerHTML = "";

fetch(url)
  .then(res => res.json())
  .then(data => {
    data.data.forEach(post => {
      const img = document.createElement("img");
      img.src = post.media_url;
      img.alt = post.caption || "";
      gallery.appendChild(img);
    });
  })
  .catch(error => {
    console.error("Erro ao carregar imagens do Instagram:", error);
    gallery.innerHTML = "<p>Erro ao carregar imagens do Instagram.</p>";
  });

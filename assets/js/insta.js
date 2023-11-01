// Coloque suas credenciais do Instagram aqui
const CLIENT_ID = "644977577834994";
const ACCESS_TOKEN =
  "IGQWRQMUtkTzZAvZATNTazFvblhjX29YSzZAGT2hqVUFvRE13bjRjU1ZAQYktxNUpoSEpYUjVkR194NzNJWldsRF9RZAmhEUTB0QVJNd003NFFmZAUpia1dFWk1zZAHA5VjM4N1RTNTBHX0dEczNmclBsQ3hyNVZAUMDZABbTAZD";
const USER_ID = "743207218";

// Função para obter os dados do feed do Instagram e exibir as fotos no site
function getInstagramFeed() {
  fetch(
    `https://graph.instagram.com/${USER_ID}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${ACCESS_TOKEN}`,
    {
      method: "GET",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      // Manipule os dados da resposta aqui
      const feedContainer = document.getElementById("instagram-feed");
      data.data.forEach((post) => {
        if (post.media_type === "IMAGE") {
          const img = document.createElement("img");
          img.src = post.media_url;
          img.alt = post.caption;
          feedContainer.appendChild(img);
        } else if (post.media_type === "VIDEO") {
          const video = document.createElement("video");
          video.src = post.media_url;
          video.alt = post.caption;
          feedContainer.appendChild(video);
        }
      });
    })
    .catch((error) => {
      // Trate os erros aqui
      console.error("Ocorreu um erro ao obter o feed do Instagram:", error);
    });
}

// Chame a função para obter o feed do Instagram quando a página for carregada
document.addEventListener("DOMContentLoaded", getInstagramFeed);

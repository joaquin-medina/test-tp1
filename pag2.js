const techNews = axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=affcf3bba7364c178fa3532776ac1119')
  .then((response) => {
    // manejar respuesta exitosa
    console.log(response);
  })
  .catch((error) => {
    // manejar error
    console.log(error);
  })
  .then(() => {
    // siempre sera ejecutado
  });

const allNews = techNews || []; //Guardo en la constante news la llamada a axios
const newList = document.querySelector('.news-container'); //Selecciono el contenedor de noticias

function newsCont(news = [], newsList) {
  newsList.innerHTML = news
    .map((news) => {
      return `      
      <div class="news-card">
        <div id="news-info">
          <h1>${news.data.article.title}</h1>
          <h3>${news.data.article.author}</h3>
          <p>${news.data.article.description}</p>
        </div>
        <div id="news-img">
          <img src="${news.data.article.urlToImage}" alt="Imagen de la noticia"/> </div>
        </div>
      </div>`;
    })
    .join("");
}

newsCont(allNews, newList)

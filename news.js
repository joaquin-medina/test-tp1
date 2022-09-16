const getNews = axios.get('https://newsapi.org/v2/everything?q=apple&techcrunch&the-wall-street-journal&apiKey=affcf3bba7364c178fa3532776ac1119')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  })
  .then(() => { })
  || [];
//Guardo en la constante allNews todas las noticias de la API

const newsContent = document.querySelector('.news-container'); //Selecciono el contenedor de noticias

let url = window.location.href;
let filename = url.substr(url.lastIndexOf("/") + 1);
console.log(filename);

function filterNews(news = [], newsList, filename) {
  newsList.innerHTML = news.map((news) => {
    if (news.data.article.source.id === 'engadget' && filename === 'pag.html') { //Noticias Apple por ID
      console.log('entro');
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
      </div>`
    } else if (news.data.article.source.id === 'techcrunch' && filename === 'pag2.html') { //Noticias Techcrunch por ID
      console.log('entro');
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
      </div>`
    } else if (news.data.article.source.id === 'the-wall-street-journal' && filename === 'pag3.html') { //Noticias Wall Street por ID
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
    </div>`
    }
  }).join('');
}

filterNews(getNews, newsContent, filename)

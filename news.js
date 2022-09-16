const axios = require('axios')

const API = axios.get('https://newsapi.org/v2/everything?q=apple&techcrunch&the-wall-street-journal&apiKey=affcf3bba7364c178fa3532776ac1119')
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

const news = API || [];
console.log(API);
const newsList = document.querySelector('.news-container');

let url = window.location.href;
let filename = url.substr(url.lastIndexOf("/") + 1);
console.log(filename);

const filterNews = (news = [], newsList, filename) => {
  newsList.innerHTML = news.map((news) => {
    if (news.source.id === 'engadget' && filename === 'pag.html') { //NOTICIAS APPLE
      console.log('entro');
      return `      
      <div class="news-card">
        <div id="news-info">
          <h1>${news.title}</h1>
          <h3>${news.author}</h3>
          <p>${news.description}</p>
        </div>
        <div id="news-img">
          <img src="${news.urlToImage}" alt="Imagen de la noticia"/> </div>
        </div>
      </div>`
    } else if (news.source.id === 'techcrunch' && filename === 'pag2.html') { //NOTICIAS TECHCRUNCH
      console.log('entro');
      return `
      <div class="news-card">
        <div id="news-info">
          <h1>${news.title}</h1>
          <h3>${news.author}</h3>
          <p>${news.description}</p>
        </div>
        <div id="news-img">
          <img src="${news.urlToImage}" alt="Imagen de la noticia"/> </div>
        </div>
      </div>`
    } else if (news.source.id === 'the-wall-street-journal' && filename === 'pag3.html') { //NOTICIAS WALL STREET
      return `
      <div class="news-card">
        <div id="news-info">
          <h1>${news.title}</h1>
          <h3>${news.author}</h3>
          <p>${news.description}</p>
        </div>
      <div id="news-img">
        <img src="${news.urlToImage}" alt="Imagen de la noticia"/> </div>
      </div>
    </div>`
    }
  }).join('');
}

filterNews(news, newsList, filename)

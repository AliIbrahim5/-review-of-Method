const form = document.getElementById('form');
const search = document.getElementById('search');
const movies = document.getElementById('movies');
const API_KEY = '81aea47d';

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const movieName = search.value;

  try {
    const request = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}`);
    const data = await request.json();
    if (data.Response == 'False') {
      alert(data.Error);
      return;
    }
    const movieList = data.Search.map((movie) => {
      return `
      <div>
      <img src=${movie.Poster}></img>
      <p>${movie.Title}</p>
      </div>
              `;
    });
    movies.innerHTML = movieList.join('');
  } catch (e) {
    console.log(e);
    alert('Error in the server');
  }
  console.log(movieList);
});

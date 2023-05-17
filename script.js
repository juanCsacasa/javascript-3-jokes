import { random, Search } from './jokes.js';

const randomJoke = document.getElementById('randomjoke');
const searchJoke = document.getElementById('search-joke');
const searchInput = document.getElementById('search-input');
const jokesList = document.getElementById('jokesList');

randomJoke.addEventListener('click', async () => {
  const joke = await random();
  jokesList.innerHTML = `<li>${joke}</li>`;
});

searchJoke.addEventListener('click', async () => {
  const searchTerm = searchInput.value.trim();
  if (searchTerm === '') {
    return;
  }

  const jokes = await Search(searchTerm);
  if (jokes.length > 0) {
    const jokesHTML = jokes.map(joke => `<li>${joke}</li>`).join('');
    jokesList.innerHTML = jokesHTML;
  } else {
    jokesList.innerHTML = '<li>No hubo resultados</li>';
  }
});




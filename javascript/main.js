import { random, search} from './jokeModule.js';

const apiurl = 'https://icanhazdadjoke.com/';

//Render del chiste random
document.getElementById('randomjoke').addEventListener('click', async () => {
  await random(apiurl);
});

//Render de la lista de chistes
document.getElementById("search").addEventListener('submit', async (event) => {
  event.preventDefault();
  await search();
});




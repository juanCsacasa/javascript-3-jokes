import { fetchdata } from "./api.js";

//esta funcion busca un chiste ramdon
export async function random(apiurl) {
  const data = await fetchdata(apiurl);
  const jokerandom = document.getElementById("jokepharagraf")
  jokerandom.textContent = data.joke;
  jokerandom.href = `produc.html?id=${data.joke}`;
}

//esta funcion busca una lista de chistes
export async function search() {
  const jokesList = document.getElementById("jokesList");
  jokesList.innerHTML = " ";
  
  const searchtext = document.getElementById("search-input").value;
  const apisearch = `https://icanhazdadjoke.com/search?term=${searchtext}`;
  const data = await fetchdata(apisearch);
  const jokes = data.results.map(result => result.joke);
  if (jokes.length > 0) {
    const jokehtml = document.createDocumentFragment();
    for (const result of data.results) {
      const createdlist = document.createElement('li');
      const joketext = document.createElement('a'); 
      joketext.textContent = result.joke;
      joketext.href = `produc.html?id=${result.id}`;
      createdlist.appendChild(joketext);
      jokehtml.appendChild(createdlist);
    }
    jokesList.appendChild(jokehtml);
  } else {
    jokesList.innerHTML = '<li>No hubo resultados</li>';
  }
}

// Esta funcion busca por medio del id
export async function selectedJoke(joke) {
  const textone = document.getElementById("jokeshirt"); 
  const texttwo = document.getElementById("jokeshirttwo");
  textone.textContent = joke;
  texttwo.textContent = joke;
}

export async function idSelected(apiid) {
  const url = `https://icanhazdadjoke.com/j/${apiid}`;
  const data = await fetchdata(url);
  return data.joke;
}

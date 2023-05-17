const url = 'https://icanhazdadjoke.com/';

export async function random() {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json'
    }
  });

  const data = await response.json();
  return data.joke;
}

export async function Search(searchTerm) {
  const response = await fetch(`https://icanhazdadjoke.com/search?term=${searchTerm}`, {
    headers: {
      Accept: 'application/json'
    }
  });

  const data = await response.json();
  return data.results.map(result => result.joke);
}
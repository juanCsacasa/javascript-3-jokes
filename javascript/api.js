export async function fetchdata(apiurl) {
  const response = await fetch(apiurl, {
    headers: {
      Accept: 'application/json'
    }
  });

  const data = await response.json();
  return data;
}
import { fetchdata } from "../api.js";

export async function obtenerDatos() {
  try {
    const apiUrl = './config/object.json';
    const data = await fetchdata(apiUrl);
    for (let i = 0; i < data.length; i++) {
      console.log(data[4].title);
    }
  } catch (error) {
    console.log('Error:', error);
  }
}


import { observerP, JokeObserver } from "./productobserver.js";
import { random } from "../jokeModule.js";

const apiurl = 'https://icanhazdadjoke.com/';

//se crea el nuevo observador
const jokeObservers = new JokeObserver();
const text = new observerP();

//lo manejamos por medio del query selector all para que me edite los elementos con la misma clase
const jokeElements = document.querySelectorAll('.joke-shirt');


const render = async () => {
  const newJoke = await random(apiurl);
  text.changeElement(newJoke);
};

//tenemos el evento del boton.
document.getElementById('randomjoke').addEventListener('click', render);

jokeElements.forEach((element) => {
  jokeObservers.addObserver(element);
  text.addObserver(element);
});

const initialJoke = await random(apiurl);
text.changeElement(initialJoke);

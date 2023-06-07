import { observerP, JokeObserver } from "./productobserver.js";
import { random } from "../jokeModule.js";

const apiurl = 'https://icanhazdadjoke.com/';

const jokeObservers = new JokeObserver();
const text = new observerP();

const jokeElements = document.querySelectorAll('.joke-shirt');


const render = async () => {
  const newJoke = await random(apiurl);
  text.changeElement(newJoke);
};

document.getElementById('randomjoke').addEventListener('click', render);

jokeElements.forEach((element) => {
  jokeObservers.addObserver(element);
  text.addObserver(element);
});

const initialJoke = await random(apiurl);
text.changeElement(initialJoke);

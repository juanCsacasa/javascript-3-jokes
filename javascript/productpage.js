import { selectedJoke, idSelected } from "./jokeModule.js";
import { createProductButtons } from "./productpage/productimage.js";
import { asifuncionanlosmodulos, changeElement } from "./productpage/productchangecolor.js";
import { name } from "./carbuy/marketbuttons.js";

createProductButtons();
name();

const jokeElements = document.querySelectorAll('.joke-shirt');
const getUrl = new URLSearchParams(window.location.search);
let id = getUrl.get('id');
jokeElements.forEach(element => element.textContent = id);
const x = await idSelected(id);
selectedJoke(x);

const randomJoke = document.getElementById('jokepharagraf');
randomJoke.addEventListener('click', function () {
  jokeElements.forEach(element => element.textContent = randomJoke.textContent)
});


asifuncionanlosmodulos();

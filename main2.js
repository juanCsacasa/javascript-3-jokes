import { selectedJoke,idSelected } from "./javascript/jokeModule.js";
import{createProductButtons} from "./javascript/productpage/productimage.js"
import { asifuncionanlosmodulos, changeElement} from "./javascript/productpage/productchangecolor.js";
import { name } from "./javascript/carbuy/marketbuttons.js";
// import { add, addToCart } from "./javascript/carbuy/marketconstructor.js";


createProductButtons();
name();
// add();


const jokeElements = document.querySelectorAll('.joke-shirt');
const getUrl = new URLSearchParams(window.location.search);
let id = getUrl.get('id');
jokeElements.forEach(element => element.textContent = id);
const x = await idSelected(id);
selectedJoke(x);

const randomJoke = document.getElementById('jokepharagraf');
randomJoke.addEventListener('click', function() {
  jokeElements.forEach(element => element.textContent = randomJoke.textContent)
});


asifuncionanlosmodulos();

import { observerP, JokeObserver} from './productobserver.js';
import { elements } from '../config/object.js';

const observer = new observerP();

// Crear instancia del observador de chistes
const jokeObserver = new JokeObserver();
observer.addObserver(jokeObserver);

// Lógica para cambiar el elemento
export function asifuncionanlosmodulos() {
const radioButtons = document.getElementsByName('color');
  radioButtons.forEach(radioButton => {
    radioButton.addEventListener('click', () => {
      const color = radioButton.value;
      const palabra = document.getElementById('title').textContent;
      changeElement(color, palabra);
    });
  });
}

export function changeElement(newElement, title) {
  // Encontrar el producto con el color seleccionado y posicion
  const selectedProduct = elements.find(product => product.color !== newElement && product.title === title);
  let posicion = elements.indexOf(selectedProduct);
  //validacion que me dice que si el nuevo elemento es igual a blanco le sume uno a la posicion
  if (newElement == "white") {
    posicion++;
  //sino que le reste uno a la posicion 
  } else {
    posicion--;
  }

  // Actualizar la imagen del producto por posicion
  const productImage = document.getElementById('product-color');
  productImage.src = elements[posicion].img;

  // Actualizar el título del producto por posicion
  const productTitle = document.getElementById('title');
  productTitle.innerText = elements[posicion].title;

  // Actualizar el precio del producto por posicion
  const productPrice = document.getElementById('price');
  productPrice.innerText = elements[posicion].price;
}
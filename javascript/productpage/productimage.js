import { observerP} from './productobserver.js';
import { elements } from '../config/object.js';

// me da la imagen en la posicion que la queiero
const defaultImages = [
  elements[0], // Primera imagen
  elements[2], // Segunda imagen
  elements[4], // Tercera imagen
  elements[6]  // Cuarta imagen
];

// Crear una instancia del observador
const observer = new observerP();

// Función para actualizar la visualización del producto seleccionado
const updateSelectedProduct = element => {
  const selectedProductImage = document.querySelector('.container-product__image img');
  selectedProductImage.src = element ? element.img : '';
  const boton = document.getElementById('btnblack');
  boton.checked = true;
};

// Función para actualizar el título del producto seleccionado
const updateSelectedTitle = element => {
  const selectedTitle = document.getElementById('title');
  selectedTitle.innerText = element ? element.title : '';
};

// Función para actualizar el precio del producto seleccionado
const updateSelectedPrice = element => {
  const selectedPrice = document.getElementById('price');
  selectedPrice.innerText = element ? element.price : '';
};

// Función para crear los botones de productos y asignarles el evento onclick
export const createProductButtons = () => {
  const container = document.getElementById('other-products--images');

  defaultImages.forEach(element => {
    const button = document.createElement('button');
    const image = document.createElement('img');
    const selectedElement = element;

    image.src = element.img;
    image.classList.add('product-image__detail');

    button.appendChild(image);
    container.appendChild(button);

    button.onclick = () => {
      observer.changeElement(selectedElement);
      container.removeChild(button);
      container.appendChild(button);
    };
  });
};

// Suscribir los observadores al cambio de elemento
observer.addObserver({ update: updateSelectedProduct });
observer.addObserver({ update: updateSelectedTitle });
observer.addObserver({ update: updateSelectedPrice });
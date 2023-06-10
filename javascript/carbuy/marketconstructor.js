import { elements } from "../config/object.js";

class market {
  constructor(title, color, price, img, id) {
    this.title = title;
    this.color = color;
    this.price = price;
    this.img = img;
    this.id = id;
  }
}

const productContainer = document.querySelector('.card-product');
const cartItemsContainer = document.querySelector('.cart-items');
// Variable para almacenar los productos seleccionados
const cartItems = [];

function addProduct() {
  productContainer.innerHTML = " "; 

  elements.forEach((product) =>{
    const product = new market (element.title, element.color, element.price, element.img, element.id);
  })
}

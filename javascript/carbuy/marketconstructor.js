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

let currentProductIndex = 6;

const addToCartButton = document.getElementById('add-cart');
addToCartButton.addEventListener('click', addToCart);

function addToCart(event) {
  const selectedProductIndex = event.target.getAttribute('data-product-index');

  const selectedProduct = new market(
    elements[selectedProductIndex].title,
    elements[selectedProductIndex].color,
    elements[selectedProductIndex].price,
    elements[selectedProductIndex].img,
    elements[selectedProductIndex].id
  );

  const productElement = document.createElement('div');
  productElement.classList.add('product');
  productElement.innerHTML = `
    <div class="select-product">
      <h3>${selectedProduct.title}</h3>
      <p>Color: ${selectedProduct.color}</p>
      <p>Price: ${selectedProduct.price}</p>
      <button class="remove-product">Remove</button>
    </div>
    <img src="${selectedProduct.img}" alt="${selectedProduct.title}" class="cart-image" />
  `;

  const cartContainer = document.querySelector('.hidden-cart');
  cartContainer.appendChild(productElement);
  currentProductIndex++;
  if (currentProductIndex === elements.length) {
    currentProductIndex = 0;
  }

  const removeButton = productElement.querySelector('.remove-product');
  removeButton.addEventListener('click', () => {
    productElement.remove();
  });

  const removeAllButton = document.getElementById('remove-all');
  removeAllButton.addEventListener('click', removeAllFromCart);
}


function removeAllFromCart() {
  const cartContainer = document.querySelector('.hidden-cart');
  const products = cartContainer.querySelectorAll('.product');
  products.forEach((product) => {
    product.remove();
  });
}

addToCartButton.setAttribute('data-product-index', currentProductIndex);
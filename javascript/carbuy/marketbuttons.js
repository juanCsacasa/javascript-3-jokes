//funcion que desplega el card que esta en el header
export function name() {
  const cardOpenBtn = document.getElementById('card-open');
  const cardCloseBtn = document.getElementById('card-close');
  const cardProduct = document.querySelector('.card-product');

  cardOpenBtn.addEventListener('click', () => {
    cardProduct.classList.add('hidden-cart');
  });

  cardCloseBtn.addEventListener('click', () => {
    cardProduct.classList.remove('hidden-cart');
  });

  cardProduct.classList.add('hidden-cart');
};

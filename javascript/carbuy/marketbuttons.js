export function name() {
  const cardOpenBtn = document.getElementById('card-open');
  const cardCloseBtn = document.getElementById('card-close');
  const cardProduct = document.querySelector('.card-product');
  const cartContainer = document.querySelector('.hidden-cart');

  cardOpenBtn.addEventListener('click', () => {
    cardProduct.classList.add('hidden-cart');
    cartContainer.style.display = 'block';
  });

  cardCloseBtn.addEventListener('click', () => {
    cardProduct.classList.remove('hidden-cart');
    cartContainer.style.display = 'none';
  });
};

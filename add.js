const addToCartBtn = document.querySelector('.add-to-cart-btn');
const popupMessage = document.querySelector('.popup-message');
const closeBtn = document.querySelector('.close-btn');
const totalElement = document.getElementById('total');

addToCartBtn.addEventListener('click', () => {
  const price = parseInt(addToCartBtn.dataset.price);
  const currentTotal = parseInt(localStorage.getItem('cartTotal')) || 0;
  const newTotal = currentTotal + price;

  localStorage.setItem('cartTotal', newTotal);
  totalElement.textContent = newTotal;

  popupMessage.classList.add('added-to-cart');
});

closeBtn.addEventListener('click', () => {
  popupMessage.classList.remove('added-to-cart');
});
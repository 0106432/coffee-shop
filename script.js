let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

function addToCartHandler(event) {
    const box = event.target.closest('.box');
    const itemName = box.querySelector('h3').textContent;
    const itemPrice = parseFloat(box.querySelector('.price').textContent.replace('$', ''));
    const itemImage = box.querySelector('img').src;

    

    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
        <div class="cart-item-details">
            <img src="${itemImage}" alt="${itemName}">
            <div>
                <h4>${itemName}</h4>
                <p class="cart-item-price">$${itemPrice.toFixed(2)}</p>
            </div>
        </div>
    `;

    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.appendChild(cartItem);

    const cartTotal = document.getElementById('cart-total');
    let currentTotal = parseFloat(cartTotal.textContent);
    currentTotal += itemPrice;
    cartTotal.textContent = currentTotal.toFixed(2);
    
}

const addToCartButtons = document.querySelectorAll('.addToCart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCartHandler);
});

const checkoutBtn = document.getElementById('checkout-btn');
checkoutBtn.addEventListener('click', () => {
    
    window.location.href = 'payment.html';
});

      
    
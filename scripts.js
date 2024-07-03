document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.product-item button');

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.innerText = 'Added!';
            button.disabled = true;
            setTimeout(() => {
                button.innerText = 'Add to Cart';
                button.disabled = false;
            }, 1000);

            const cartIcon = document.querySelector('.header-icons img[alt="Cart"]');
            cartIcon.classList.add('shake');
            setTimeout(() => {
                cartIcon.classList.remove('shake');
            }, 500);
        });
    });
});

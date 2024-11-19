const cartItems = [];
const sizeModal = document.getElementById('sizeModal');
sizeModal.addEventListener('show.bs.modal', (event) => {
    const button = event.relatedTarget;
    const productName = button.getAttribute('data-product');
    const productImage = button.getAttribute('data-image');
    const productInput = document.getElementById('productName');
    const imageInput = document.getElementById('productImage');
    productInput.value = productName;
    imageInput.value = productImage;
});

const sizeForm = document.getElementById('sizeForm');
sizeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const productName = document.getElementById('productName').value;
    const size = document.getElementById('sizeSelect').value;
    const productImage = document.getElementById('productImage').value;
    if (size) {
        cartItems.push({ product: productName, size: size, image: productImage });
        sizeModal.classList.remove('show');
        document.body.classList.remove('modal-open');
        document.querySelector('.modal-backdrop').remove();
        sizeForm.reset();
    }
});

const cartModal = document.getElementById('cartModal');
cartModal.addEventListener('show.bs.modal', () => {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    cartItemsContainer.innerHTML = '';
    cartItems.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('d-flex', 'align-items-center', 'mb-3');
        div.innerHTML = `
            <img src="${item.image}" alt="${item.product}" style="width: 50px; height: 50px; margin-right: 10px;">
            <div>
                <strong>${item.product}</strong> - Talla: ${item.size}
            </div>
        `;
        cartItemsContainer.appendChild(div);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const unitPrice = 3300; // Ціна за одиницю товару
    const quantityElement = document.getElementById('quantity');
    const totalPriceElement = document.getElementById('total-price');

    function updateTotalPrice() {
        const quantity = parseInt(quantityElement.value);
        const totalPrice = unitPrice * quantity;
        totalPriceElement.textContent = totalPrice.toFixed(2);
    }

    quantityElement.addEventListener('input', updateTotalPrice);
    // Викликаємо функцію відразу, щоб встановити початкову ціну
    updateTotalPrice();
});

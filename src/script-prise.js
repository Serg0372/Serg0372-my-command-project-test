  document.addEventListener('DOMContentLoaded', () => {
            const quantityInput = document.getElementById('quantity');
            const unitPriceElement = document.getElementById('unit-price');
            const totalPriceElement = document.getElementById('total-price');

            function updateTotalPrice() {
                const quantity = parseInt(quantityInput.value);
                const unitPrice = parseFloat(unitPriceElement.textContent);
                const totalPrice = unitPrice * quantity;
                totalPriceElement.textContent = totalPrice.toFixed(0);
            }

            quantityInput.addEventListener('input', updateTotalPrice);
            updateTotalPrice(); 
        });
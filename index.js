document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const orderSummary = document.getElementById('order-summary');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const item = document.getElementById('item').value;
        const quantity = parseInt(document.getElementById('quantity').value);
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        // Calculate total price based on item and quantity (you can customize this calculation)
        let totalPrice = 0;
        switch (item) {
            case 'item1':
                totalPrice = 10 * quantity;
                break;
            case 'item2':
                totalPrice = 15 * quantity;
                break;
            case 'item3':
                totalPrice = 20 * quantity;
                break;
            default:
                totalPrice = 0;
        }
        
        // Display order summary to the user
        orderSummary.innerHTML = `
            <h2>Order Summary</h2>
            <p><strong>Item:</strong> ${item}</p>
            <p><strong>Quantity:</strong> ${quantity}</p>
            <p><strong>Total Price:</strong> $${totalPrice}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;
    });
});
              

// Function to validate individual fields
function validateField(fieldId, validationFn, errorMessage) {
    const field = document.getElementById(fieldId);
    const errorSpan = document.getElementById(fieldId + '-error');
    if (!validationFn(field.value)) {
        errorSpan.textContent = errorMessage;
        return false;
    } else {
        errorSpan.textContent = '';
        return true;
    }
}

// Validation functions for each field
function validateName(value) {
    return value.trim() !== '';
}

function validateEmail(value) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(value);
}

function validateAddress(value) {
    return value.trim() !== '';
}

function validateZip(value) {
    return /^\d{5}$/.test(value);
}

// Update shipping info when copy address is checked
document.getElementById('copy-address').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('shipping-address').value = document.getElementById('address').value;
        document.getElementById('shipping-city').value = document.getElementById('city').value;
        document.getElementById('shipping-zip').value = document.getElementById('zip').value;
        document.getElementById('shipping-state').value = document.getElementById('state').value;
    }
});

// Quantity control and order total calculation
function updateOrderTotal() {
    let orderTotal = 0;

    document.querySelectorAll('.qty').forEach((qtyInput, index) => {
        let qty = parseInt(qtyInput.value) || 0;
        let priceText = document.getElementById('price' + (index + 1)).textContent;
        let price = parseFloat(priceText.replace('$', '')) || 0;
        let total = qty * price;
        document.getElementById('total' + (index + 1)).textContent = `$${total.toFixed(2)}`;
        orderTotal += total;
    });

    // Subtotal
    document.getElementById('subtotal').textContent = `$${orderTotal.toFixed(2)}`;

    // Tax Calculation
    const shippingState = document.getElementById('shipping-state').value;
    let tax = 0;
    if (shippingState === 'TX') {
        tax = orderTotal * 0.08;
    }
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;

    // Shipping Calculation
    let shippingCost = 10;
    if (shippingState === 'TX') {
        shippingCost = 5;
    } else if (shippingState === 'CA' || shippingState === 'NY') {
        shippingCost = 20;
    }
    document.getElementById('shipping').textContent = `$${shippingCost.toFixed(2)}`;

    // Grand Total
    const grandTotal = orderTotal + tax + shippingCost;
    document.getElementById('grand-total').textContent = `$${grandTotal.toFixed(2)}`;
}

// Event listener for quantity input
document.querySelectorAll('.qty').forEach(qtyInput => {
    qtyInput.addEventListener('blur', updateOrderTotal);
});

// Validate the entire form before submission
document.getElementById('personal-info-form').addEventListener('submit', function(event) {
    let valid = true;

    // Validate fields
    valid &= validateField('name', validateName, 'Name is required');
    valid &= validateField('email', validateEmail, 'Invalid email address');
    valid &= validateField('address', validateAddress, 'Address is required');
    valid &= validateField('city', validateAddress, 'City is required');
    valid &= validateField('zip', validateZip, 'Zip code must be 5 digits');
    valid &= validateField('shipping-address', validateAddress, 'Shipping address is required');
    valid &= validateField('shipping-city', validateAddress, 'Shipping city is required');
    valid &= validateField('shipping-zip', validateZip, 'Shipping zip code must be 5 digits');

    if (!valid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

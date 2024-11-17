$(document).ready(function() {
  // Initially hide the newSignup form
  $('#newSignup').hide();

  // Toggle form and change the symbol when the signup link is clicked
  $('#signupLink').click(function(event) {
    event.preventDefault(); // Prevent the default action of the anchor tag

    // Toggle the visibility of the newsSignup form
    $('#newSignup').slideToggle();

    // Change the open/close symbol
    const span = $('#openclose');
    if (span.text() === '+') {
      span.text('-');
    } else {
      span.text('+');
    }
  });
});
$(document).ready(function() {
  // Slogan hover effects
  $('#slogan').hover(
    // Onmouseover
    function() {
      $(this).fadeOut(400, 'linear', function() {
        $(this).text('Hand Picked Just for You').fadeIn(600, 'swing');
      });
    },
    // Onmouseout
    function() {
      $(this).fadeOut(200, 'swing', function() {
        $(this).text('The Power of Flowers').fadeIn(600, 'linear');
      });
    }

    $(document).ready(function() {
  // Form submission event
  $('#signupForm').submit(function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display the alert message
    alert('Thank you for registering');

    // Hide the newsSignup form
    $('#newSignup').slideUp();

    // Fade the signup link to 30% opacity
    $('#signupLink').fadeTo(400, 0.3);  // 400ms for the fade effect
  });

// Initialize the shopping cart count
let cartCount = 0;

// Create a variable for the remove button HTML
const deleteButtonHTML = "<span class='del'>Remove</span>";

// Event listener for Add to Cart button click
document.querySelectorAll('.add').forEach(button => {
  button.addEventListener('click', function() {
    // Increment the cart count
    cartCount++;

    // If the cart count is greater than 0, hide the "empty cart" message
    if (cartCount > 0) {
      document.getElementById('empty').style.display = 'none';
    }

    // Get the name and id attributes of the clicked element
    const itemName = this.getAttribute('name');
    const itemID = this.getAttribute('id');

    // Create the cart item HTML
    const cartLink = `<li class='cartItem' name='${itemID}'>${itemName} ${deleteButtonHTML}</li>`;

    // Append the new item to the shopping cart
    document.getElementById('cart').insertAdjacentHTML('beforeend', cartLink);

    // Hide the Add to Cart button for the clicked item
    this.style.display = 'none';

    // Delegate function for remove buttons inside the shopping cart
    document.getElementById('cart').addEventListener('click', function(event) {
      if (event.target.classList.contains('del')) {
        // Remove the parent li (the cart item)
        const cartItem = event.target.closest('li.cartItem');
        cartItem.remove();

        // Deduct 1 from the cart count
        cartCount--;

        // If the cart is empty, show the "empty cart" message
        if (cartCount === 0) {
          document.getElementById('empty').style.display = 'block';
        }

        // Show the Add to Cart button again for the associated flower
        const itemID = cartItem.getAttribute('name');
        const addButton = document.querySelector(`#${itemID}`);
        if (addButton) {
          addButton.style.display = 'inline-block';
        }
      }
    });
  });
});

// Event listener for the rating stars
document.querySelectorAll('.rating .star').forEach(star => {
  star.addEventListener('click', function() {
    // Get the rating value of the clicked star
    const ratingValue = this.getAttribute('data-rating');

    // Get the parent span (rating container) for the stars
    const ratingContainer = this.closest('.rating');

    // Update the image sources for all stars based on the clicked rating
    ratingContainer.querySelectorAll('.star').forEach(starImage => {
      if (starImage.getAttribute('data-rating') <= ratingValue) {
        starImage.src = 'staron.gif'; // Set to 'on' state
      } else {
        starImage.src = 'staroff.gif'; // Set to 'off' state
      }
    });
  });
});


    
});

  );
});



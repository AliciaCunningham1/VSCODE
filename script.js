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
});

  );
});



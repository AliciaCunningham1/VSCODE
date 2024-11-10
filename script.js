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



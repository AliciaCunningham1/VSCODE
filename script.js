$(document).ready(function() {
    // Hide all botanic names initially
    $('.botanic').hide();
    
    // Hide all image divs initially
    $('.imgdiv').hide();

    // Mouseover and Mouseout Events for headings
    $('h1, h2').on('mouseover', function() {
        $(this).css('color', 'blue'); // Change to any color you choose
    }).on('mouseout', function() {
        $(this).css('color', ''); // Change back to original color
    });

    // Click Events to show botanic names
    $('.flower').on('click', function() {
        $('.botanic').hide(); // Hide all botanic names
        $(this).children('.botanic').show(); // Show the botanic name for the clicked flower
    });

    // Hover Event to show images
    $('.pic').on('mouseover', function(evt) {
        const imgId = '#' + $(this).attr('title'); // Get the ID of the image div
        const x = evt.pageX + 150; // X coordinate plus offset
        const y = evt.pageY; // Y coordinate
        
        $(imgId).css({ top: y, left: x }).show(); // Position and show the image
    }).on('mouseout', function() {
        const imgId = '#' + $(this).attr('title');
        $(imgId).hide(); // Hide the image on mouseout
    });

    // Keypress Event to jump to the first flower starting with the letter
    $(document).keypress(function(e) {
        const keyPressed = String.fromCharCode(e.which).toLowerCase();
        window.location = '#' + keyPressed; // Jump to the corresponding flower ID
    });

    // show flowers
    $('.pic').hover(function(evt) {
        // ID
        var imgId = '#' + $(this).attr('title') + 'Img';

        // x+y
        var x = evt.pageX + 150; 
        var y = evt.pageY;

        $(imgId).css({
            top: y + 'px',
            left: x + 'px',
            position: 'absolute' 
        }).show();
    }, function() {
        // hide on mouseout
        var imgId = '#' + $(this).attr('title') + 'Img'; 
        $(imgId).hide(); 
    });
});


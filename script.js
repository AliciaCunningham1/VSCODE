$(document).ready(function() {
    // Add hover effect to smaller images
    $('.thumbnail').hover(
        function() {
            $(this).css({
                'border': '2px solid darkgreen',
                'box-shadow': '0 0 10px rgba(0, 128, 0, 0.5)'
            });
        },
        function() {
            $(this).css({
                'border': 'none',
                'box-shadow': 'none'
            });
        }
    );

    // Click event for smaller images to change large image
    $('.thumbnail').click(function() {
        var newSrc = $(this).attr('src'); // Get the src of the clicked thumbnail
        var altText = $(this).attr('alt'); // Get the alt text of the clicked thumbnail
        
        // Change the src of the large image
        $('#large-image').attr('src', newSrc);
        
        // Change the text under the large image
        $('#image-caption').text(altText);
    });

    // Click event for the large image to open it in a new window
    $('#large-image').click(function() {
        var src = $(this).attr('src'); // Get the src of the large image
        window.open(src, '_blank'); // Open it in a new tab/window
    });
});


$(document).ready(function() {
    // Get current date and month
    const currentDate = new Date();
    const currentMonthIndex = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    
    // Array of month names
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthName = months[currentMonthIndex];
    
    // Add "Happy Holidays!" for December
    if (currentMonthIndex === 11) {
        $("h2").after("<h3>Happy Holidays!</h3>");
    }

    // Modify month display
    $("#month").text(`Tips for ${monthName}`);
    
    // Append current year to copyright
    $("#copyright").text(currentYear);
    
    // Specials array (example data)
    const specials = [
        "Special for January: New Year Discounts!",
        "Special for February: Valentine's Day Offers!",
        "Special for March: Spring Sales!",
        "Special for April: Easter Specials!",
        "Special for May: Mother's Day Deals!",
        "Special for June: Summer Kickoff!",
        "Special for July: Independence Day Sales!",
        "Special for August: Back to School Specials!",
        "Special for September: Fall Clearance!",
        "Special for October: Halloween Specials!",
        "Special for November: Thanksgiving Offers!",
        "Special for December: Holiday Discounts!"
    ];
    
    // Display special for the current month
    $("#specials").html(specials[currentMonthIndex]);
    
    // Seasonal variables
    let season, backgroundImage, seasonColor, seasonIndex;
    
    switch (currentMonthIndex) {
        case 11: // December
        case 0: // January
        case 1: // February
            season = 'Winter';
            backgroundImage = 'winterbg.jpg';
            seasonColor = "#00f";
            seasonIndex = 0;
            break;
        case 2: // March
        case 3: // April
        case 4: // May
            season = 'Spring';
            backgroundImage = 'springbg.jpg';
            seasonColor = "#d7d";
            seasonIndex = 1;
            break;
        case 5: // June
        case 6: // July
        case 7: // August
            season = 'Summer';
            backgroundImage = 'summerbg.jpg';
            seasonColor = "#006400";
            seasonIndex = 2;
            break;
        case 8: // September
        case 9: // October
        case 10: // November
            season = 'Fall';
            backgroundImage = 'fallbg.jpg';
            seasonColor = "#930";
            seasonIndex = 3;
            break;
    }

    // Change background image
    $('body').css('background-image', `url(${backgroundImage})`);
    
    // Tips array (example data)
    const tips = [
        "Winter Tips: Stay warm and cozy!",
        "Spring Tips: Time to refresh your home!",
        "Summer Tips: Keep cool in the heat!",
        "Fall Tips: Enjoy the beautiful colors!"
    ];
    
    // Update seasontips div
    $("#seasontips").html(tips[seasonIndex]);
    
    // Change text color for seasonal elements
    $("strong, h1, h2, h3").css("color", seasonColor);
    
    // Add season class to specials
    $("#specials").addClass(season.toLowerCase());
});

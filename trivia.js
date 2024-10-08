// trivia.js

// Quotes array
const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans.",
    "Get busy living or get busy dying.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "The purpose of our lives is to be happy."
];

// Function to display the quote of the day
function displayQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}

// Function to get the current date and time
function displayDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const formattedDate = now.toLocaleString('en-US', options);
    document.getElementById('date').innerText = `Current date and time: ${formattedDate}`;
}

// Function to create a personalized greeting
function personalizedGreeting() {
    const name = prompt("Please enter your name:");
    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
    const hours = new Date().getHours();
    let greeting;

    switch (true) {
        case (hours < 12):
            greeting = `Good Morning, ${capitalizedName}!`;
            break;
        case (hours < 18):
            greeting = `Good Afternoon, ${capitalizedName}!`;
            break;
        default:
            greeting = `Good Evening, ${capitalizedName}!`;
    }
    
    document.getElementById('greeting').innerText = greeting;
}

// Function to validate email
function validateEmail() {
    let email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    do {
        email = prompt("Please enter your email address:");
        if (!emailRegex.test(email)) {
            alert("Invalid email. Please try again.");
        }
    } while (!emailRegex.test(email));

    const [username, domain] = email.split('@');
    const upperUsername = username.toUpperCase();

    document.getElementById('score').innerText += `Username: ${upperUsername}, Domain: ${domain}`;
}

// Dummy trivia quiz function (implement your quiz logic here)
function startTrivia() {
    // Sample score (implement your quiz logic to calculate the actual score)
    const totalQuestions = 9;
    const score = Math.floor(Math.random() * totalQuestions + 1); // Random score for demo
    const percentage = ((score / totalQuestions) * 100).toFixed(2);
    
    document.getElementById('score').innerText += `Score: ${score} out of ${totalQuestions} (${percentage}%)`;
}

// Main function to run all
function main() {
    displayQuote();
    displayDate();
    personalizedGreeting();
    validateEmail();
    startTrivia();
}

document.addEventListener("DOMContentLoaded", main);

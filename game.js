// Multi-dimensional array with trivia questions
var questions = [
    ["What is the capital of France?", 0, "Berlin", "Madrid", "Paris"],
    ["What is 2 + 2?", 2, "3", "4", "5"],
    ["What is the largest planet in our solar system?", 1, "Earth", "Jupiter", "Mars"]
];

// Counter to track the current question index
var count = 0;

// Function to initialize the game
function playGame() {
    // Check if there are no more questions
    if (count >= questions.length) {
        document.getElementById('question').innerHTML = "Game Over! No more questions.";
        document.getElementById('answers').innerHTML = "";
        return;
    }

    // Access the current question and its details
    var currentQuestion = questions[count];
    var questionText = currentQuestion[0];
    var correctIndex = currentQuestion[1];

    // Display the question
    document.getElementById('question').innerHTML = questionText;

    // Remove the question from the array
    questions.shift();

    // Prepare the answers
    var answerList = "";
    for (var i = 2; i < currentQuestion.length; i++) {
        answerList += `<li onclick="checkAnswer(${i - 2}, ${correctIndex})">${currentQuestion[i]}</li>`;
    }

    // Display the answers
    document.getElementById('answers').innerHTML = answerList;
    document.getElementById('answers').insertAdjacentHTML('beforeend', "<p>Click the best answer!</p>");
}

// Function to check the answer
function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        alert("Correct!");
    } else {
        alert("Wrong answer. Try again!");
    }

    // Move to the next question
    count++;
    playGame();
}

// Dynamically create the Play Game button
document.getElementById('prompt').innerHTML = '<button onclick="playGame()">Play Game</button>';


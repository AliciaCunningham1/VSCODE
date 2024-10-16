// Sample questions array for demonstration
let questions = [
    ["What is the capital of France?", "Paris", "London", "Berlin"],
    ["What is 2 + 2?", "4", "3", "5"],
    ["What is the largest planet in our solar system?", "Jupiter", "Earth", "Mars"]
];

function playGame() {
    // Access the first question and post it in the HTML document
    const questionElement = document.getElementById('question');
    const answersElement = document.getElementById('answers');
    
    // Get the current question
    const currentQuestion = questions[0];
    questionElement.textContent = currentQuestion[0]; // Set question text
    
    // Remove the question from the array
    questions.shift();
    
    // Access and remove the correct answer index
    const correctAnswer = currentQuestion[1];
    const correctIndex = 1; // The correct answer is always the second element (index 1)
    
    // Create a list of answers from remaining elements
    const remainingAnswers = currentQuestion.slice(2); // Get remaining answers
    const answersList = document.createElement('ul');
    
    // Format answers as list items
    remainingAnswers.forEach((answer, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#" onClick="checkAnswer(${index}, ${correctIndex})">${answer}</a>`;
        answersList.appendChild(listItem);
    });
    
    // Post the answers list in the HTML document
    answersElement.innerHTML = ''; // Clear previous answers
    answersElement.appendChild(answersList);
    
    // Add prompt for user
    const promptElement = document.createElement('p');
    promptElement.textContent = "Please click the best answer.";
    answersElement.appendChild(promptElement);
}

// Example checkAnswer function
function checkAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex - 2) { // Adjust for the index of remaining answers
        alert("Correct!");
    } else {
        alert("Wrong answer. Try again!");
    }
}


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Trivia Game</title>
    <style>
        /* Basic styling for better visibility */
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding: 20px;
            background-color: #f4f4f4;
        }
        #answers {
            list-style-type: none;
            padding: 0;
        }
        #answers li {
            margin: 10px 0;
        }
    </style>
</head>
<body>

    <div id="prompt"></div>
    <p id="question"></p>
    <ul id="answers"></ul>

    <script>
        // Counter to track the questions
        var counter = 0;

        // Multi-dimensional array with trivia questions
        var questions = [
            ["What is the capital of France?", 0, "Paris", "London", "Berlin"],
            ["What is 2 + 2?", 1, "3", "4", "5"],
            ["What is the largest planet in our solar system?", 2, "Earth", "Jupiter", "Mars"]
        ];

        // Function to initialize the game
        function playGame() {
            if (questions.length === 0) {
                document.getElementById('question').innerText = "No more questions!";
                return;
            }

            // Access the first question
            var currentQuestion = questions[0];
            document.getElementById('question').innerText = currentQuestion[0];

            // Remove question from array
            questions.shift();

            // Access the correct answer index
            var correctIndex = currentQuestion[1];
            var answerChoices = currentQuestion.slice(2);

            // Display answer choices
            var answersHtml = answerChoices.map((answer, index) => 
                `<li onclick="checkAnswer(${index}, ${correctIndex})">${answer}</li>`
            ).join('');

            document.getElementById('answers').innerHTML = answersHtml;
            counter++;
            document.getElementById('prompt').innerHTML = "Click the best answer.";
        }

        // Function to check the answer
        function checkAnswer(chosenIndex, correctIndex) {
            if (chosenIndex === correctIndex) {
                alert("Correct answer!");
            } else {
                alert("Incorrect answer. Try again!");
            }

            // Check if there are more questions
            if (questions.length > 0) {
                // Load the Play Game button to continue
                document.getElementById('prompt').innerHTML = '<button onclick="playGame()">Play Next Question</button>';
            } else {
                // Load Restart Game button
                document.getElementById('prompt').innerHTML = '<button onclick="location.reload()">Restart Game</button>';
            }
        }

        // Load the Play Game button when the page loads
        window.onload = function() {
            document.getElementById('prompt').innerHTML = '<button onclick="playGame()">Play Game</button>';
        }
    </script>
</body>
</html>

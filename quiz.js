const questions = [
    "JavaScript",
    "HTML",
    "CSS"
];

const answers = [
    "JavaScript",
    "HyperText Markup Language",
    "Cascading Style Sheets"
];

function quiz() {
    let totalPoints = 0;

    for (let i = 0; i < questions.length; i++) {
        let guesses = 3;
        let correct = false;

        while (guesses > 0 && !correct) {
            let userAnswer = prompt(`Question ${i + 1}: What is ${questions[i]}?`);

            if (userAnswer === answers[i]) {
                correct = true;
                totalPoints += (4 - guesses); // Points based on remaining guesses
                alert(`Correct! You earned ${4 - guesses} points.`);
            } else {
                guesses--;
                if (guesses > 0) {
                    alert(`Incorrect! You have ${guesses} tries left.`);
                } else {
                    alert(`Sorry, the correct answer was: ${answers[i]}`);
                }
            }
        }
    }

    return totalPoints;
}

const finalScore = quiz();
document.getElementById("scoreDisplay").innerText = `Your total score is: ${finalScore}`;

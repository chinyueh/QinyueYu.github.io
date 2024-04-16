// Function to check trivia answer
function checkTriviaAnswer() {
    const answer = document.getElementById('triviaAnswer').value.trim();
    const responseElement = document.getElementById('triviaResponse');
    const correctAnswer = "Paris";
    
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
        responseElement.textContent = `Correct! You guessed: ${answer}`;
    } else {
        responseElement.textContent = `Incorrect. You guessed: ${answer}.`;
    }
}


document.getElementById('triviaAnswer').addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        checkTriviaAnswer();
    }
});

// Function to check if the number is a 5-digit integer and whether it's odd or even
function checkNumber() {
    const number = document.getElementById('numberInput').value;
    const responseElement = document.getElementById('numberResponse');

    if (!number.match(/^\d{5}$/)) {
        responseElement.textContent = "Please enter a valid 5-digit integer.";
        return;
    }

    const num = parseInt(number, 10);
    if (num % 2 === 0) {
        responseElement.textContent = `${num} is an even number.`;
    } else {
        responseElement.textContent = `${num} is an odd number.`;
    }
}

document.getElementById('numberInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkNumber();
    }
});
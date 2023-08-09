const randomValue = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const resultText = document.getElementById('resultText');
const resultTex = document.getElementById('resultTex');
const attemptsText = document.getElementById('attemptsText');

guessButton.addEventListener('click', function () {
    attempts++;
    attemptsText.textContent = `Number of Attempts: ${attempts}`;

    const userGuess = parseInt(guessInput.value);

    if (userGuess === randomValue) {
        resultTex.innerHTML = `Congratulations! 🎉 You're a mastermind! The hidden number was ${randomValue}.`;
        resultText.innerHTML = `Your skillful score: <span style="color: green">${200 - attempts * 2}</span>`;
        guessButton.disabled = true;
    } else if (userGuess > randomValue) {
        resultText.textContent = 'Your guess is too high. Try again.';
    } else if (userGuess < randomValue) {
        resultText.textContent = 'Your guess is too low. Try again.';
    }
});

import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Guess the Number (1-100)</h1>
    <input type="number" id="guessInput" placeholder="Enter your guess">
    <button id="guessBtn">Guess</button>
    <h3 id="attempts"></h3>
    <p id="message"></p>
    <button id="resetBtn">Reset Game</button>
  </div>
`;

// Generate a secret number once so it persists between guesses
let randomNumber = generateRandom();

const guessButton = document.getElementById("guessBtn");
const message = document.getElementById("message");
const guessInput = document.getElementById("guessInput");
const resetButton = document.getElementById("resetBtn");
const attempts = document.getElementById("attempts");
var isGameInProgress = false;
var attemptCount = 5;

setAttempts();

function generateRandom() {
  const n = Math.floor(Math.random() * 100) + 1;
  console.log("Secret number:", n);
  return n;
}

function setMessage(text, color = "white") {
  message.textContent = text;
  message.style.color = color;
}

function setAttempts(count = attemptCount) {
  attempts.textContent = `Attempts Left: ${count}`;
}

guessButton.addEventListener("click", () => {
  if (attemptCount <= 1) {
    setAttempts(0);
    setMessage("No attempts left! Please reset the game.", "red");
    return;
  }

  const userGuess = Number(guessInput.value);
  const isValidUserGuess = userGuess < 1 || userGuess > 100 || isNaN(userGuess);
  if (isValidUserGuess) {
    setMessage("Please enter a valid number between 1 and 100.", "red");
    return;
  }

  isGameInProgress = true;
  attemptCount--;
  setAttempts();

  if (userGuess === randomNumber) {
    setMessage("Congratulations! You guessed it right!", "green");
  } else if (userGuess < randomNumber) {
    setMessage("Too low! Try again.");
  } else if (userGuess > randomNumber) {
    setMessage("Too high! Try again.");
  }
});

resetButton.addEventListener("click", () => {
  if (isGameInProgress) {
    const shouldReset = confirm("Are you sure you want to reset the game?");
    if (shouldReset) {
      window.location.reload();
    }
  }
});

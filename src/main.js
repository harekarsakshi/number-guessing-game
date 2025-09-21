import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Guess the Number (1-100)</h1>
    <input type="number" id="guessInput" placeholder="Enter your guess">
    <button id="guessBtn">Guess</button>
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

function generateRandom() {
  const n = Math.floor(Math.random() * 100) + 1;
  console.log("Secret number:", n);
  return n;
}

guessButton.addEventListener("click", () => {
  const userGuess = Number(guessInput.value);

  if (userGuess === randomNumber){
    message.textContent = "Congratulations! You guessed it right!";       
  } else if (userGuess < randomNumber){
    message.textContent = "Too low! Try again.";  
  } else if (userGuess > randomNumber){
    message.textContent = "Too high! Try again.";
  }
})

  

resetButton.addEventListener("click", () => {
  randomNumber = generateRandom();
  guessInput.value = "";
  message.textContent = "Game has been reset!";
});



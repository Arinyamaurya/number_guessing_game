let num = parseInt(Math.random() * 100 + 1);
console.log(num);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const userGuesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number!');
  } else if (guess < 1) {
    alert('please enter a number greater than 1');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuesses(guess);
      displayMsg(`Game over ! The  randdom number was ${num}`);
      endGame();
    } else {
      displayGuesses(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === num) {
    displayMsg(`you guessed it right!`);
    endGame();
  } else if (guess > num) {
    displayMsg(`your guess is too high!`);
  } else if (guess < num) {
    displayMsg(`your guess is too low!`);
  }
}
function displayGuesses(guess) {
  userInput.value = '';
  userGuesses.innerHTML += `${guess}   `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMsg(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newgame">Start a new game.</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newgamebutton = document.querySelector('#newgame');
  newgamebutton.addEventListener('click', function (e) {
    num = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    userGuesses.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    lowOrHigh.innerHTML = '';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
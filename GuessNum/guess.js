let randomNum = parseInt(Math.random() * 100 + 1);
console.log(randomNum);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const prevResults = document.querySelector('.prevResults');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let guessNum = 1;

let playGame = true;

if(playGame) {
    submit.addEventListener('click', function (event) {
        event.preventDefault();    //cuz we will be using the values not sending it to the server
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if(isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else if(guess < 1) {
        alert('Please enter a number more than 1')
    } else {
        prevGuess.push(guess);
        if(guessNum === 11) {
            dataHandle(guess);
            prevResults.innerHTML = `0`;
            displayMessage(`Game Over. Random number was ${randomNum}`);
            endGame();
        } else {
            dataHandle(guess);
            checkGame(guess);
        }
    }
}

function checkGame(guess) {
    if(guess === randomNum) {
        displayMessage(`You have guessed it right!`);
        endGame();
    } else if(guess < randomNum) {
        displayMessage(`You have guessed TOO low`);
    } else if (guess > randomNum) {
        displayMessage(`You have guessed it TOO high`);
    } 
}

function dataHandle(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    guessNum++;
    prevResults.innerHTML = `${11 - guessNum}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    playGame = false;
    newGame();
}

function newGame () {
    const newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click', function(event) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    guessNum = 1;
    guessSlot.innerHTML = '';
    prevResults.innerHTML = `10`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
})
}
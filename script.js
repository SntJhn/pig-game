'use strict';

// ELEMENTS
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const displayScore0El = document.getElementById('score--0');
const displayScore1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const newGameEl = document.querySelector('.btn--new');
const rollDiceEl = document.querySelector('.btn--roll');
const holdDiceEl = document.querySelector('.btn--hold');

// VARIABLES
let score = [0, 0]; // FIRST PLAYER [0], SECOND PLAYER [1]
let current = 0;
let activePlayer = 0;

// FUNCTIONS
const randomNumber = () => {
    return Math.trunc(Math.random() * 6) + 1;
};

const rollTheDice = () => {
    const number = randomNumber();
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${number}.png`;
    return number;
};

const switchPlayer = () => {
    current = 0;
    document.getElementById(`current--${activePlayer}`).textContent = current;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

const playerWin = () => {
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    rollDiceEl.disabled = true;
    holdDiceEl.disabled = true;
    diceEl.classList.add('hidden');
};

const updCurrentScore = (number) => {
    if (number !== 1) {
        current += number;
        document.getElementById(`current--${activePlayer}`).textContent =
            current;
    } else {
        // CHANGE PLAYER
        switchPlayer();
    }
};

const startNewGame = () => {
    score = [0, 0];
    current = 0;
    activePlayer = 0;

    displayScore0El.textContent = 0;
    displayScore1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    diceEl.classList.add('hidden');

    rollDiceEl.disabled = false;
    holdDiceEl.disabled = false;
};

// STARTING CONDITIONS
startNewGame();

// EVENT LISTENERS
rollDiceEl.addEventListener('click', () => {
    const number = rollTheDice();
    updCurrentScore(number);
});

holdDiceEl.addEventListener('click', () => {
    // ADD CURRENT SCORE TO ACTIVE PLAYER'S SCORE
    score[activePlayer] += current;
    document.getElementById(`score--${activePlayer}`).textContent =
        score[activePlayer];

    if (score[activePlayer] >= 100) {
        // PLAYER WINS
        playerWin();
    } else {
        // CHANGE PLAYER
        switchPlayer();
    }
});

newGameEl.addEventListener('click', startNewGame);

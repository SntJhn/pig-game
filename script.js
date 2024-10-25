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
const score = [0, 0]; // FIRST PLAYER [0], SECOND PLAYER [1]
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

const updCurrentScore = (number) => {
    if (number !== 1) {
        current += number;
        document.getElementById(`current--${activePlayer}`).textContent =
            current;
    } else {
        // SWITCH TO NEXT PLAYER
        current = 0;
        document.getElementById(`current--${activePlayer}`).textContent =
            current;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player;
    }
};

// STARTING CONDITIONS
displayScore0El.textContent = 0;
displayScore1El.textContent = 0;
diceEl.classList.add('hidden');

// EVENT LISTENERS
rollDiceEl.addEventListener('click', () => {
    const number = rollTheDice();
    updCurrentScore(number);
});

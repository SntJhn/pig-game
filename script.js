'use strict';

// ELEMENTS
const displayScore0El = document.getElementById('score--0');
const displayScore1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const newGameEl = document.querySelector('.btn--new');
const rollDiceEl = document.querySelector('.btn--roll');
const holdDiceEl = document.querySelector('.btn--hold');

// VARIABLES
let score = 0;
let current = 0;

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
        currentScore0El.textContent = current; // CHANGE TO CURRENT PLAYER
    } else {
        // SWITCH TO NEXT PLAYER
        current = 0;
        currentScore0El.textContent = current; // CHANGE TO CURRENT PLAYER
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

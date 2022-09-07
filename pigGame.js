// const roll = document.querySelector('.btn--roll');
//
// const hold = document.querySelector('.btn--hold');
// const currentScore = document.querySelector('#current--0');
// const currentScore1 = document.querySelector('#current--1');
//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  //switch to next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active'); //remove if it there or push if it is not there
  player1El.classList.toggle('player--active'); //remove if it there or push if it is not there
};

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3.Check for rolled 1: if true,
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

btnHold.addEventListener('click', function () {
  // document.getElementById(`score--${activePlayer}`).textContent = currentScore;
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  switchPlayer();
});

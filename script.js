'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

diceEl.classList.add('hidden');
let scores = [0, 0],
  currentScore = 0,
  activePlayer = 0,
  playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;

player0El.classList.add('player--active');
player1El.classList.remove('player--active');

// Switch players

/// Rolling Dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 5) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    console.log(dice);

    if (dice == 1) {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = 1 - activePlayer;
      currentScore = 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    } else {
      console.log(currentScore);
      currentScore += dice;
      console.log(currentScore);
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }

    current0El.value = currentScore;
  }
});

// Holding Dice
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
    } else {
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = 1 - activePlayer;
      currentScore = 0;
      player0El.classList.toggle('player--active');
      player1El.classList.toggle('player--active');
    }
  }
});

btnNew.addEventListener('click', function () {
  (scores = [0, 0]), (currentScore = 0), (activePlayer = 0), (playing = true);

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--active');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
});

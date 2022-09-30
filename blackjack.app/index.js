let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
// let sumEl = document.querySelector('#sum-el');
let cardsEl = document.getElementById('cards-el');

let player = {
  name: 'Per',
  chips: 145,
};
let playerEl = document.getElementById('player-el');
playerEl.textContent = player.name + ': $' + player.chips;

function getRandomCard() {
  let ran = Math.ceil(Math.random() * 13);
  if (ran === 1) return 11;
  else if (ran > 10) return 10;
  else {
    return ran;
  }
}
function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

function renderGame() {
  cardsEl.textContent = 'Cards: ';
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' ';
  }

  sumEl.textContent = 'Sum: ' + sum;
  if (sum < 21) {
    message = 'Do you want to draw a new card?';
  } else if (sum === 21) {
    hasBlackjack = true;
    message = "You've got Blackjack! ";
  } else {
    isAlive = false;
    message = "You're out of the game! ";
  }

  messageEl.textContent = message;
}

function newCard() {
  if (isAlive && hasBlackjack !== true) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

let hands = ['rock', 'paper', 'scissor'];

// Create a function that returns a random item from the array
function game() {
  console.log(hands[Math.floor(Math.random() * 3)]);
}

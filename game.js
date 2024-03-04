// game.js
const suits = ["♥", "♦", "♣", "♠"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let deck = [];
let boardCards = [];
let playerHand = [];

function createDeck() {
    deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push({suit, value});
        }
    }
    shuffleDeck();
}

function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

function dealCards() {
    boardCards = deck.slice(0, 5);
    playerHand = deck.slice(5, 7);
    displayCards();
}

function displayCards() {
    const boardElement = document.getElementById('boardCards');
    boardElement.innerHTML = boardCards.map(card => `<div class="card">${card.value}${card.suit}</div>`).join('');

    const handElement = document.getElementById('playerHand');
    handElement.innerHTML = playerHand.map(card => `<div class="card">${card.value}${card.suit}</div>`).join('');
}

document.getElementById('dealButton').addEventListener('click', dealCards);

createDeck();

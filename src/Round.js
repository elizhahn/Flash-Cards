const Turn = require("./Turn.js");

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = deck.cards[0];
    this.turnCount = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    const newIndex = this.deck.indexOf(this.currentCard) + 1;
    this.currentCard = this.deck[newIndex];
  }
}

module.exports = Round;

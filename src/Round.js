class Round {
  constructor(deck) {
    this.currentCard = deck.cards[0];
    this.turnCount = 0;
    this.incorrectGuesses = [];
  }
}

module.exports = Round;

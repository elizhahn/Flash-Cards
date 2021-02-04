const data = require("./data");
const prototypeQuestions = data.prototypeData;
const Turn = require("./Turn.js");
const Card = require("./Card.js");

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = deck.cards[0];
    this.turnCount = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turnCount++;
    const turn = new Turn(guess, this.currentCard);
    const newIndex = this.deck.indexOf(this.currentCard) + 1;
    this.currentCard = this.deck[newIndex];
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card.id);
    }
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const percentCorrect = Math.trunc(
      (1 - this.incorrectGuesses.length / this.deck.length) * 100
    );
    this.percentCorrect = percentCorrect;
    return percentCorrect;
  }

  reviewCardsAgain() {
    console.log(
      "Let's review the ones you missed! \n-----------------------------------------------------------------------------------"
    );
    this.deck = [];
    for (const id of this.incorrectGuesses) {
      for (const card of prototypeQuestions) {
        if (id === card.id) {
          this.deck.push(
            new Card(card.id, card.question, card.answers, card.correctAnswer)
          );
        }
      }
    }
    this.incorrectGuesses = [];
    this.currentCard = this.deck[0];
  }

  endRound() {
    const percentCorrect = this.calculatePercentCorrect();
    console.log(
      `**Round over!** You answered ${percentCorrect}% of the questions correctly`
    );
  }
}

module.exports = Round;

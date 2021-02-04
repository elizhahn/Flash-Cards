const data = require("./data");
const prototypeQuestions = data.prototypeData;
const util = require("./util");
const Round = require("../src/Round.js");
const Deck = require("../src/Deck.js");
const Card = require("../src/Card.js");

class Game {
  constructor() {
    this.currentRound = {};
  }
  start() {
    const cards = [];
    prototypeQuestions.forEach((card) => {
      cards.push(
        new Card(card.id, card.question, card.answers, card.correctAnswer)
      );
    });
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;

const chai = require("chai");
const expect = chai.expect;
const Card = require("../src/Card.js");
const Deck = require("../src/Deck.js");
const Turn = require("../src/Turn.js");
const Round = require("../src/Round.js");

describe("Round", function () {
  it.skip("should be a function", function () {
    expect(Round).to.be.a("function");
  });

  it.skip("should instantiate a Round class", function () {
    const round = new Round();
    expect(round).to.be.instanceof(Round);
  });

  it.skip("should store the current card, incorrect guesses, and turn count", function () {
    const card1 = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    const card2 = new Card(
      2,
      "What is a comma-separated list of related values?",
      ["array", "object", "function"],
      "array"
    );
    const deck = new Deck([card1, card2]);
    const round = new Round(deck);

    expect(round.currentCard).to.deep.equal(card1);
    expect(round.currentCard.id).to.equal(1);
    expect(round.turnCount).to.equal(0);
    expect(round.incorrectGuesses).to.equal([]);
  });
});

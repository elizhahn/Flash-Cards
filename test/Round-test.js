const chai = require("chai");
const expect = chai.expect;
const Card = require("../src/Card.js");
const Deck = require("../src/Deck.js");
const Round = require("../src/Round.js");

describe.only("Round", function () {
  let card1;
  let card2;
  let deck;
  let round;
  beforeEach("instantiate Cards, Deck, and Round", function () {
    card1 = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    card2 = new Card(
      2,
      "What is a comma-separated list of related values?",
      ["array", "object", "function"],
      "array"
    );
    deck = new Deck([card1, card2]);
    round = new Round(deck);
  });
  it("should be a function", function () {
    expect(Round).to.be.a("function");
  });

  it("should instantiate a Round class", function () {
    expect(round).to.be.instanceof(Round);
  });

  it("should store a deck, current card, incorrect guesses, and turn count", function () {
    expect(round.deck).to.deep.equal(deck.cards);
    expect(round.currentCard).to.deep.equal(card1);
    expect(round.currentCard.id).to.equal(1);
    expect(round.turnCount).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it("should return the currentCard in play", function () {
    const currentCard = round.returnCurrentCard();

    expect(currentCard.id).to.equal(1);
    expect(currentCard).to.deep.equal(card1);
  });

  it("should update the turn count when user takes a turn", function () {
    round.takeTurn();

    expect(round.turnCount).to.equal(1);
  });

  it("should update the current card when a user takes a turn", function () {
    round.takeTurn();

    expect(round.currentCard.id).to.equal(2);
    expect(round.currentCard).to.deep.equal(card2);
  });

  it("should evaluate answers and store incorrect answer ids", function () {
    round.takeTurn("object");
    round.takeTurn("function");

    expect(round.incorrectGuesses[0]).to.equal(2);
  });

  it("should give feedback for each user guess", function () {
    const feedback1 = round.takeTurn("object");
    const feedback2 = round.takeTurn("function");

    expect(feedback1).to.equal("correct!");
    expect(feedback2).to.equal("incorrect!");
  });

  it("should calculate the percentage of correct guesses", function () {
    round.takeTurn("object");
    round.takeTurn("function");
    const percentCorrect = round.calculatePercentCorrect();

    expect(percentCorrect).to.equal(50);
  });

  it("should reset the incorrect guess properties", function () {
    round.takeTurn("object");
    round.takeTurn("function");
    round.reviewCardsAgain();

    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it("should reset the deck with only incorrect cards", function () {
    round.takeTurn("object");
    round.takeTurn("function");
    round.reviewCardsAgain();

    expect(round.deck.length).to.equal(1);
  });
});

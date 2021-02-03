const chai = require("chai");
const expect = chai.expect;
const Card = require("../src/Card");
const Turn = require("../src/Turn");

describe("Turn", function () {
  let card1;
  let card2;
  let turn1;
  let turn2;
  beforeEach("instantiate Cards and a Turn", function () {
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
    turn1 = new Turn("object", card1);
    turn2 = new Turn("object", card2);
  });
  it("should be a function", function () {
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of Turn", function () {
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it("should return a user's guess", function () {
    const userGuess = turn1.returnGuess();

    expect(turn1.guess).to.equal("object");
    expect(userGuess).to.equal("object");
  });

  it("should return the current card", function () {
    const currentCard1 = turn1.returnCard();
    const currentCard2 = turn2.returnCard();

    expect(turn1.card).to.equal(card1);
    expect(currentCard1).to.be.an.instanceof(Card);
    expect(currentCard1).to.deep.equal(card1);

    expect(turn2.card).to.equal(card2);
    expect(currentCard2).to.be.an.instanceof(Card);
    expect(currentCard2).to.deep.equal(card2);
  });

  it("should evaluate if the guess was correct or incorrect", function () {
    const guess1 = turn1.evaluateGuess();
    const guess2 = turn2.evaluateGuess();

    expect(guess1).to.equal(true);
    expect(guess2).to.equal(false);
  });

  it("should provide feedback based on the guess", function () {
    turn1.evaluateGuess();
    turn2.evaluateGuess();

    const feedback1 = turn1.giveFeedback();
    const feedback2 = turn2.giveFeedback();

    expect(feedback1).to.equal("correct!");
    expect(feedback2).to.equal("incorrect!");
  });
});

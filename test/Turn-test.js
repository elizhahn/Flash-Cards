const chai = require("chai");
const expect = chai.expect;
const Card = require("../src/Card");
const Turn = require("../src/Turn");

describe("Turn", function () {
  it("should be a function", function () {
    const turn = new Turn();
    expect(turn).to.be.a("function");
  });

  it("should be an instance of Turn", function () {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it("should return a user's guess", function () {
    const turn = new Turn("object");
    const userGuess = turn.returnGuess();

    expect(turn.guess).to.equal("object");
    expect(userGuess).to.equal("object");
  });

  it("should return the current card", function () {
    const card = new Card(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    const turn = new Turn("object", card);
    const currentCard = turn.returnCard();

    expect(turn.card).to.equal(card);
    expect(currentCard).to.be.an.instanceof(Card);
    expect(currentCard).to.deep.equal(card);
  });

  it("should evaluate if the guess was correct or incorrect", function () {
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
    const turn1 = new Turn("object", card1);
    const turn2 = new Turn("object", card2);

    turn1.evaluateGuess();
    turn2.evaluateGuess();

    expect(turn1.isCorrect).to.equal(true);
    expect(turn2.isCorrect).to.equal(false);
  });

  it("should provide feedback based on the guess", function () {
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
    const turn1 = new Turn("object", card1);
    const turn2 = new Turn("function", card2);

    const feedback1 = turn1.giveFeedBack();
    const feedback2 = turn2.giveFeedBack();

    expect(feedback1).to.equal("correct!");
    expect(feedback2).to.equal("incorrect!");
  });
});

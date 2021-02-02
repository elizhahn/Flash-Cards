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
    expect(currentCard).to.be.an.instanceof(Card);
    expect(currentCard).to.deep.equal(card);
  });
});

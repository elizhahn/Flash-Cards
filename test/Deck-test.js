const chai = require("chai");
const expect = chai.expect;
const Card = require("../src/Card.js");
const Deck = require("../src/Deck.js");

describe("Deck", function () {
  it("should be a function", function () {
    expect(Deck).to.be.a("function");
  });

  it("should be an instance of Deck", function () {
    const deck = new deck();
    expect(deck).to.be.instanceof(Deck);
  });
});

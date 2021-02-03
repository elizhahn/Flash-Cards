const chai = require("chai");
const expect = chai.expect;
const Game = require("../src/Game.js");
const Round = require("../src/Round.js");
const Deck = require("../src/Deck.js");
const Card = require("../src/Card.js");
const Turn = require("../src/Turn.js");

describe("Game", function () {
  it("should be a function", function () {
    expect(Game).to.be.a("function");
  });

  it("should instantiate a new Game", function () {
    const game = new Game();
    expect(game).to.be.aninstanceof(Game);
  });

  it("should keep track of the current round", function () {
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
    const game = new Game(round);

    expect(game.currentRound).to.deep.equal(game);
  });
});

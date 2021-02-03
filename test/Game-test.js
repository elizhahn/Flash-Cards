const chai = require("chai");
const expect = chai.expect;
const Game = require("../src/Game.js");
const Round = require("../src/Round.js");
const Deck = require("../src/Deck.js");
const Card = require("../src/Card.js");

describe("Game", function () {
  it("should be a function", function () {
    expect(Game).to.be.a("function");
  });

  it("should instantiate a new Game", function () {
    const game = new Game();

    expect(game).to.be.aninstanceof(Game);
  });

  it("should start off with a default currentRound", function () {
    const game = new Game();

    expect(game.currentRound).to.deep.equal({});
  });

  describe("start the game", function () {
    it("should create cards for a round and put them in a deck", function () {
      const data = [
        {
          id: 1,
          question:
            "What allows you to define a set of related information using key-value pairs?",
          answers: ["object", "array", "function"],
          correctAnswer: "object",
        },
        {
          id: 2,
          question: "What is a comma-separated list of related values?",
          answers: ["array", "object", "function"],
          correctAnswer: "array",
        },
      ];
      const game = new Game();
      const deck = game.start();

      expect(deck[0]).to.be.aninstanceof(Card);
      expect(deck[1]).to.be.aninstanceof(Card);
      expect(deck[0]).to.deep.equal(data[0]);
      expect(deck[1]).to.deep.equal(data[1]);
    });

    it("should create a new round", function () {
      const data = [
        {
          id: 1,
          question:
            "What allows you to define a set of related information using key-value pairs?",
          answers: ["object", "array", "function"],
          correctAnswer: "object",
        },
        {
          id: 2,
          question: "What is a comma-separated list of related values?",
          answers: ["array", "object", "function"],
          correctAnswer: "array",
        },
      ];
      const game = new Game();
      game.start();

      expect(game.currentRound).to.be.aninstanceof(Round);
      expect(game.currentRound.deck).to.deep.equal(data);
      expect(game.currentRound.deck[0]).to.be.aninstanceof(Card);
    });
  });
});

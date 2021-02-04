const chai = require("chai");
const expect = chai.expect;
const Game = require("../src/Game.js");
const Round = require("../src/Round.js");
const Card = require("../src/Card.js");

describe("Game", function () {
  let game;
  beforeEach("instantiate a Game", function () {
    game = new Game();
  });
  it("should be a function", function () {
    expect(Game).to.be.a("function");
  });

  it("should instantiate a new Game", function () {
    expect(game).to.be.instanceof(Game);
  });

  it("should start off with a default currentRound", function () {
    expect(game.currentRound).to.deep.equal({});
  });

  it("should create a new round", function () {
    game.start();

    expect(game.currentRound).to.be.instanceof(Round);

    it("should create cards for a round and put them in a deck", function () {
      game.start();

      expect(game.currentRound.deck[0]).to.be.instanceof(Card);
    });
  });
});

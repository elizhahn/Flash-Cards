class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.isCorrect = true;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }
  }
  giveFeedback() {
    if (this.isCorrect) {
      return "correct!";
    } else {
      return "incorrect!";
    }
  }
}

module.exports = Turn;

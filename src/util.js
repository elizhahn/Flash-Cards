const inquirer = require("inquirer");

const genList = (round) => {
  let card = round.returnCurrentCard();

  let choices = card.answers.map((answer, index) => {
    return {
      key: index,
      value: answer,
    };
  });
  return {
    type: "rawlist",
    message: card.question,
    name: "answers",
    choices: choices,
  };
};

const getRound = (round) => {
  return Promise.resolve(round);
};

const confirmUpdate = (id, round) => {
  const feedback = round.takeTurn(id);
  return {
    name: "feedback",
    message: `Your answer of ${id} is ${feedback}`,
  };
};

async function main(round) {
  const currentRound = await getRound(round);
  const getAnswer = await inquirer.prompt(genList(currentRound));
  const getConfirm = await inquirer.prompt(
    confirmUpdate(getAnswer.answers, round)
  );

  //if(!round.returnCurrentCard() && round.incorrectGuesses.length === 0) {
  //  round.endRound();
  //   would need to print a new message in endRound here that is appropriate
  //} else if(!round.returnCurrentCard() && round.incorrectGuesses.lenght > 0){
  //   round.reviewCardsAgain()
  //   create a method here that would load the incorrect cards by id
  //  into the deck and print a message to user using calculate PercentCorrect
  // the round should keep cycling if the deck is refilled here
  //}
  //
  //

  if (!round.returnCurrentCard() && round.incorrectGuesses.length === 0) {
    round.endRound();
  } else if (!round.returnCurrentCard() && round.incorrectGuesses.length > 0) {
    round.reviewCardsAgain();
    main(round);
  } else {
    main(round);
  }
}

module.exports.main = main;

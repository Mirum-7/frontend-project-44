import { getAnswer, getName } from './cli.js';

const game = (gameRuleMessage, getQuestion, getResult) => {
  console.log('Welcome to the Brain Games!');

  const numberOfRounds = 3;
  const name = getName();

  console.log(`Hello, ${name}!`);
  console.log(gameRuleMessage);

  let gameIsWin = true;
  let userAnswer;
  let correctAnswer;
  for (let round = 1; round <= numberOfRounds; round += 1) {
    const question = getQuestion();
    correctAnswer = getResult(question).toString();

    console.log(`Question: ${question}`);
    userAnswer = getAnswer('Your answer: ').toLowerCase();

    if (userAnswer !== correctAnswer) {
      gameIsWin = false;
      break;
    }

    console.log('Correct!');
  }

  if (gameIsWin) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
  }
};

export default game;

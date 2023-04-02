import { getAnswer, getName, greeting } from './src/cli.js';

const game = (gameRuleMessage, getQuestion, getResult) => {
  console.log('Welcome to the Brain Games!');

  const numberOfRounds = 3;
  const name = getName();

  console.log(greeting(name));
  console.log(gameRuleMessage);

  let round = 1;
  let gameIsWin = true;
  let userAnswer;
  let correctAnswer;

  while (round <= numberOfRounds) {
    const question = getQuestion();
    correctAnswer = getResult(question).toString();

    console.log(`Question: ${question}`);
    userAnswer = getAnswer('Your answer: ').toLowerCase();

    if (userAnswer !== correctAnswer) {
      gameIsWin = false;
      break;
    }

    round += 1;
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

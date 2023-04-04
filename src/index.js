import { getAnswer } from './funcs.js';

function startGame(gameRuleMessage, getQuestionAndResult) {
  console.log('Welcome to the Brain Games!');

  const numberOfRounds = 3;
  const name = getAnswer('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(gameRuleMessage);

  for (let round = 1; round <= numberOfRounds; round += 1) {
    const [question, correctAnswer] = getQuestionAndResult();

    console.log(`Question: ${question}`);
    const userAnswer = getAnswer('Your answer: ').toLowerCase();

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
}

export default startGame;

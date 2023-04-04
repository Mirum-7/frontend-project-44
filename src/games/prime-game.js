import {
  booleanToWord,
  getRandomNumber,
  isPrime,
} from '../funcs.js';
import startGame from '../index.js';

const startBrainPrime = () => {
  const ruleMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const getQuestionAndResult = () => {
    const question = getRandomNumber();
    const result = booleanToWord(isPrime(question));

    return [question, result];
  };

  startGame(ruleMessage, getQuestionAndResult);
};

export default startBrainPrime;

import {
  booleanToWord,
  getRandomNumber,
} from '../funcs.js';
import startGame from '../index.js';

const isPrime = (number) => {
  let is = true;
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      is = false;
      break;
    }
  }

  return is;
};

const ruleMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndResult = () => {
  const question = getRandomNumber();
  const result = booleanToWord(isPrime(question));

  return [question, result];
};

const startBrainPrime = () => {
  startGame(ruleMessage, getQuestionAndResult);
};

export default startBrainPrime;

import startGame from '../index.js';
import { getRandomNumber } from '../funcs.js';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const ruleMessage = 'Find the greatest common divisor of given numbers.';

const getQuestionAndResult = () => {
  const num1 = getRandomNumber(1);
  const num2 = getRandomNumber(1);
  const question = `${num1} ${num2}`;
  const result = getGcd(num1, num2).toString();

  return [question, result];
};

const startBrainGcd = () => {
  startGame(ruleMessage, getQuestionAndResult);
};

export default startBrainGcd;

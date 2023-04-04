import startGame from '../index.js';
import { getGcd, getRandomNumber } from '../funcs.js';

const startBrainGcd = () => {
  const ruleMessage = 'Find the greatest common divisor of given numbers.';

  const getQuestionAndResult = () => {
    const num1 = getRandomNumber(1);
    const num2 = getRandomNumber(1);
    const question = `${num1} ${num2}`;
    const result = getGcd(num1, num2).toString();

    return [question, result];
  };

  startGame(ruleMessage, getQuestionAndResult);
};

export default startBrainGcd;

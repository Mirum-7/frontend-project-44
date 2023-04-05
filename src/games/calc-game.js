import startGame from '../index.js';
import { getRandomNumber } from '../funcs.js';

const ruleMessage = 'What is the result of the expression?';

const getQuestionAndResult = () => {
  const signs = ['+', '-', '*'];
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const signIndex = getRandomNumber(0, 2);
  const sign = signs[signIndex];

  const question = `${num1} ${sign} ${num2}`;

  let result;
  switch (signIndex) {
    case 0:
      result = +num1 + +num2;
      break;
    case 1:
      result = +num1 - +num2;
      break;
    default:
      result = +num1 * +num2;
      break;
  }
  return [question, result.toString()];
};

const startBrainCalc = () => {
  startGame(ruleMessage, getQuestionAndResult);
};

export default startBrainCalc;

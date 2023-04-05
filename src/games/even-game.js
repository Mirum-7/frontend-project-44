import {
  getRandomNumber, booleanToWord,
} from '../funcs.js';
import startGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const ruleMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestionAndResult = () => {
  const question = getRandomNumber();

  return [question, booleanToWord(isEven(question))];
};

const startBrainEven = () => {
  startGame(ruleMessage, getQuestionAndResult);
};

export default startBrainEven;

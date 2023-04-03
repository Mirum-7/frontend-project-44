import game from '../index.js';
import { getGcd, getRandomNumber } from '../cli.js';

const brainGcdStart = () => {
  const ruleMessage = 'Find the greatest common divisor of given numbers.';
  const getQuestion = () => `${getRandomNumber(1)} ${getRandomNumber(1)}`;
  const getResult = (question) => getGcd(...question.split(' ').map((el) => +el));

  game(ruleMessage, getQuestion, getResult);
};

export default brainGcdStart;

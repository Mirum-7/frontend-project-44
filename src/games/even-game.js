import {
  getRandomNumber, isEven, booleanToWord,
} from '../cli.js';
import game from '../index.js';

const brainEvenStart = () => {
  const ruleMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getResult = (question) => booleanToWord(isEven(question));

  game(ruleMessage, getRandomNumber, getResult);
};

export default brainEvenStart;

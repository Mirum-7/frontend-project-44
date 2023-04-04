import {
  getRandomNumber, isEven, booleanToWord,
} from '../funcs.js';
import startGame from '../index.js';

const startBrainEven = () => {
  const ruleMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

  const getQuestionAndResult = () => {
    const question = getRandomNumber();

    return [question, booleanToWord(isEven(question))];
  };

  startGame(ruleMessage, getQuestionAndResult);
};

export default startBrainEven;

import { createProgression, getRandomNumber } from '../funcs.js';
import startGame from '../index.js';

const startBrainProgression = () => {
  const ruleMessage = 'What number is missing in the progression?';

  const getQuestionAndResult = () => {
    const firstNumber = getRandomNumber();
    const progressionLength = getRandomNumber(5, 15);
    const progressionStep = getRandomNumber(1, 10);

    const progression = createProgression(firstNumber, progressionLength, progressionStep);
    const unknownElementIndex = getRandomNumber(0, progressionLength - 1);
    const unknownElement = progression[unknownElementIndex];

    progression[unknownElementIndex] = '..';

    const question = progression.join(' ');
    const result = unknownElement.toString();

    return [question, result];
  };

  startGame(ruleMessage, getQuestionAndResult);
};

export default startBrainProgression;

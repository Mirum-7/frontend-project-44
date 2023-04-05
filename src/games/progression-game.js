import { getRandomNumber } from '../funcs.js';
import startGame from '../index.js';

const createProgression = (first, len, step) => {
  const result = [];

  let next = first;

  for (let i = 0; i < len; i += 1) {
    result.push(next);
    next += step;
  }

  return result;
};

const ruleMessage = 'What number is missing in the progression?';

const getQuestionAndResult = () => {
  const firstNumber = getRandomNumber();
  const progressionLength = getRandomNumber(5, 15);
  const progressionStep = getRandomNumber(1, 10);

  const progression = createProgression(
    firstNumber,
    progressionLength,
    progressionStep,
  );

  const unknownElementIndex = getRandomNumber(0, progressionLength - 1);
  const unknownElement = progression[unknownElementIndex];

  progression[unknownElementIndex] = '..';

  const question = progression.join(' ');
  const result = unknownElement.toString();

  return [question, result];
};

const startBrainProgression = () => {
  startGame(ruleMessage, getQuestionAndResult);
};

export default startBrainProgression;

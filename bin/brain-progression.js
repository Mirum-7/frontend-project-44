#!/usr/bin/env node

import game from '../index.js';
import { createProgression, getAverage, getRandomNumber } from '../src/cli.js';

const ruleMessage = 'What number is missing in the progression?';

const getQuestion = () => {
  const firstNumber = getRandomNumber();
  const progressionLength = getRandomNumber(5, 15);
  const progressionStep = getRandomNumber(1, 10);

  const progression = createProgression(firstNumber, progressionLength, progressionStep);
  const unknownElementIndex = getRandomNumber(0, progressionLength - 1);

  progression[unknownElementIndex] = '..';
  return progression.join(' ');
};

const getResult = (question) => { // question be like: "1 3 5 .. 7 9"
  const progression = question.split(' ');
  const unknownElementIndex = progression.indexOf('..');
  if (unknownElementIndex === 0) {
    return +progression[1] * 2 - +progression[2];
  }
  if (unknownElementIndex === progression.length - 1) {
    return +progression.at(-2) * 2 - +progression.at(-3);
  }
  return getAverage(+progression[unknownElementIndex - 1], +progression[unknownElementIndex + 1]);
};

game(ruleMessage, getQuestion, getResult);

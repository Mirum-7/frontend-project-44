#!/usr/bin/env node

import game from '../index.js';
import { getRandomNumber } from '../src/cli.js';

const ruleMessage = 'What is the result of the expression?';
const getQuestion = () => {
  const signs = ['+', '-', '*'];
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const signIndex = getRandomNumber(0, 2);
  const sign = signs[signIndex];

  return `${num1} ${sign} ${num2}`;
};
// const getResult = (question) => eval(question).toString(); // Линтер жалуется на функцию eval

const getResult = (question) => { // Вот второй вариант
  if (question.includes('+')) {
    const [num1, num2] = question.split('+');
    return +num1 + +num2;
  } if (question.includes('-')) {
    const [num1, num2] = question.split('-');
    return +num1 - +num2;
  }
  const [num1, num2] = question.split('*');
  return +num1 * +num2;
};

game(ruleMessage, getQuestion, getResult);

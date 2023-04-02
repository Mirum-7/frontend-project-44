#!/usr/bin/env node

import game from '../index.js';
import { getGcd, getRandomNumber } from '../src/cli.js';

const ruleMessage = 'Find the greatest common divisor of given numbers.';
const getQuestion = () => `${getRandomNumber(1)} ${getRandomNumber(1)}`;
const getResult = (question) => getGcd(...question.split(' ').map((el) => +el));

game(ruleMessage, getQuestion, getResult);

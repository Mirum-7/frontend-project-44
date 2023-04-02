#!/usr/bin/env node

import {
  getRandomNumber, isEven, booleanToWord,
} from '../src/cli.js';
import game from '../index.js';

const ruleMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
const getResult = (question) => booleanToWord(isEven(question));

game(ruleMessage, getRandomNumber, getResult);

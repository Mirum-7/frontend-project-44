#!/usr/bin/env node

import {
	getRandomNumber, booleanToWord, isPrime,
} from '../src/cli.js';
import game from '../index.js';

const ruleMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getQuestion = () => getRandomNumber();
const getResult = (question) => booleanToWord(isPrime(question));

game(ruleMessage, getQuestion, getResult);

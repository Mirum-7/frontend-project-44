#!/usr/bin/env node

import game from '../index.js';
import {getGcd, getRandomNumber} from "../src/cli.js";

const ruleMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestion = () => `${getRandomNumber(1)} ${getRandomNumber(1)}`;
const getResult = (question) => getGcd(...question.split(' ').map((el) => +el));

game(ruleMessage, getQuestion, getResult);

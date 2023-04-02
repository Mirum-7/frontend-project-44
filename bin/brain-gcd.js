#!/usr/bin/env node

import game from '../index.js';
import {getRandomNumber} from "../src/cli.js";

const ruleMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
const getQuestion = () => `${getRandomNumber(1)} ${getRandomNumber(1)}`;
const getGcd = (question) => {
	const numbers = question.split(' ');
	const minNum = Math.min(...numbers);
	const maxNum = Math.max(...numbers);

	let maxDivisor = 0;

	for(let i = 1; i<= Math.sqrt(minNum) + 1; i++){
		if (minNum % i === 0) {
			const oppositeDivisor = minNum / i
			if (maxNum % oppositeDivisor === 0 && oppositeDivisor > maxDivisor) {
				maxDivisor = oppositeDivisor
				continue
			}
			if (maxNum % i === 0 && i > maxDivisor){
				maxDivisor = i;
			}
		}
	}

	return maxDivisor
};

game(ruleMessage, getQuestion, getGcd);

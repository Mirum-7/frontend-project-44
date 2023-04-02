#!/usr/bin/env node

import {
 getAnswer, getRandomNumber, getName, greeting, isEven, booleanToWord,
} from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const name = getName();
console.log(greeting(name));

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let score = 0;
let gameIsWin = true;
let userAnswer;
let correctAnswer;

while (score < 3) {
	const number = getRandomNumber();
	correctAnswer = booleanToWord(isEven(number));
	console.log(`Question: ${number}`);

	userAnswer = getAnswer('Your answer: ').toLowerCase();
	if ((userAnswer !== 'yes' || userAnswer !== 'no') && (userAnswer !== correctAnswer)) {
		gameIsWin = false;
		break;
	}

	score += 1;
	console.log('Correct!');
}

if (gameIsWin) {
	console.log(`Congratulations, ${name}!`);
} else {
	console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
	console.log(`Let's try again, ${name}!`);
}

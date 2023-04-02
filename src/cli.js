import readlineSync from 'readline-sync';

export const getName = () => readlineSync.question('May I have your name? ');

export const greeting = (name) => `Hello, ${name}!`;

export const getAnswer = (msg) => readlineSync.question(`${msg} `);

export const getRandomNumber = (start = 0, end = 100) => Math.floor(Math.random() * (end - start + 1) + start);

export const isEven = (number) => number % 2 === 0;

// export const wordToBoolean = (answer) => answer.toLowerCase() === 'yes';

export const booleanToWord = (bool) => {
  if (bool) {
		return 'yes';
  }
	return 'no';
};

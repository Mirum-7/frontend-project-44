import readlineSync from 'readline-sync';

export const getName = () => {
	return readlineSync.question('May I have your name? ');
}

export const greeting = (name) => {
  return `Hello, ${name}!`;
}
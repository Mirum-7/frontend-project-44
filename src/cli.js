import readlineSync from 'readline-sync';

export const getName = () => readlineSync.question('May I have your name? ');

export const greeting = (name) => `Hello, ${name}!`;

export const getAnswer = (msg) => readlineSync.question(`${msg} `);

export const getRandomNumber = (
	start = 0,
	end = 100,
) => Math.floor(Math.random() * (end - start + 1) + start);

export const isEven = (number) => number % 2 === 0;

// export const wordToBoolean = (answer) => answer.toLowerCase() === 'yes';

export const booleanToWord = (bool) => {
  if (bool) {
		return 'yes';
  }
	return 'no';
};

export const getGcd = (num1, num2) => {
	const minNum = Math.min(num1, num2);
	const maxNum = Math.max(num1, num2);

	let maxDivisor = 0;

	for (let i = 1; i <= Math.sqrt(minNum) + 1; i += 1) {
		if (minNum % i === 0) {
			const oppositeDivisor = minNum / i;
			if (maxNum % oppositeDivisor === 0 && oppositeDivisor > maxDivisor) {
				maxDivisor = oppositeDivisor;
			} else if (maxNum % i === 0 && i > maxDivisor) {
				maxDivisor = i;
			}
		}
	}

	return maxDivisor;
};

export const createProgression = (first, len, step) => {
	const result = [];

	for (let i = 0; i < len; i += 1) {
		result.push(first);
		first += step;
	}

	return result;
};

export const getAverage = (...nums) => nums.reduce((sum, el) => sum += el, 0) / nums.length;

export const isPrime = (number) => {
	let isPrime = true;

	for (let i = 2; i < number; i++) {
		if (number % i === 0) {
			isPrime = false;
			break;
		}
	}

	return isPrime;
};
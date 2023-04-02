import readlineSync from 'readline-sync';

export const getName = () => readlineSync.question('May I have your name? ');

export const getAnswer = (msg) => readlineSync.question(`${msg} `);

export const getRandomNumber = (
  start = 0,
  end = 100,
) => Math.floor(Math.random() * (end - start + 1) + start);

export const isEven = (number) => number % 2 === 0;

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

  let next = first;

  for (let i = 0; i < len; i += 1) {
    result.push(next);
    next += step;
  }

  return result;
};

// Я хотел сделать так "(...nums) => nums.reduce((sum, el) => sum + el, 0) / nums.length",
// но линтер запретил
export const getAverage = (num1, num2) => (num1 + num2) / 2;

export const isPrime = (number) => {
  let is = true;
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      is = false;
      break;
    }
  }

  return is;
};

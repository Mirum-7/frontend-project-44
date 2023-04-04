import readlineSync from 'readline-sync';

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

export const getGcd = (num1, num2) => { // Нашел другой способ
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
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

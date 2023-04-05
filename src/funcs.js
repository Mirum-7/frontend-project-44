import readlineSync from 'readline-sync';

export const getAnswer = (msg) => readlineSync.question(`${msg} `);

export const getRandomNumber = (
  start = 0,
  end = 100,
) => Math.floor(Math.random() * (end - start + 1) + start);

export const booleanToWord = (bool) => (bool ? 'yes' : 'no');

import {
  getRandomNumber, booleanToWord, isPrime,
} from '../cli.js';
import game from '../index.js';

const brainPrimeStart = () => {
  const ruleMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getResult = (question) => booleanToWord(isPrime(question));

  game(ruleMessage, getRandomNumber, getResult);
};

export default brainPrimeStart;

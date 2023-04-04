import { getAnswer } from './funcs.js';

const showGreeting = () => {
  console.log('Welcome to the Brain Games!');

  const name = getAnswer('May I have your name? ');

  console.log(`Hello, ${name}!`);
};

export default showGreeting;

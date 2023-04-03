import { getName } from '../cli.js';

const brainGamesStart = () => {
  console.log('Welcome to the Brain Games!');

  const name = getName();

  console.log(`Hello, ${name}!`);
};

export default brainGamesStart;

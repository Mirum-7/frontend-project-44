import game from '../index.js';
import { getRandomNumber } from '../cli.js';

const brainCalcStart = () => {
  const ruleMessage = 'What is the result of the expression?';
  const getQuestion = () => {
    const signs = ['+', '-', '*'];
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const signIndex = getRandomNumber(0, 2);
    const sign = signs[signIndex];

    return `${num1} ${sign} ${num2}`;
  };

  const getResult = (question) => {
    const elementsOfMathExpression = question.split(' ');
    const [num1, sigh, num2] = elementsOfMathExpression;
    let result;
    switch (sigh) {
      case '+':
        // return +num1 + +num2; линт поругался на это
        result = +num1 + +num2; // пришлось создавать новую переменную
        break;
      case '-':
        result = +num1 - +num2;
        break;
      default:
        result = +num1 * +num2;
        break;
    }
    return result;
  };

  game(ruleMessage, getQuestion, getResult);
};

export default brainCalcStart;

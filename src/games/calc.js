import game from '../game';
import randomInteger from '../utils'

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const operations = [
  (n, m) => n + m,
  (n, m) => n - m,
  (n, m) => n * m,
];

const calc = (parameter) => {
  if (parameter === 'description') {
    return { description };
  }
  const num1 = randomInteger(0, 99);
  const num2 = randomInteger(0, 99);
  const randomOperationSelector = randomInteger(0, 2);

  const question = `${num1} ${operators[randomOperationSelector]} ${num2}`;
  const rightAnswer = String(operations[randomOperationSelector](num1, num2));

  const gameData = {
    question,
    rightAnswer,
  };

  return gameData;
};

export default () => game(calc);

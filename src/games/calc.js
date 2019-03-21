import game from '../game';
import randomInteger from '../utils';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const operations = [
  (n, m) => n + m,
  (n, m) => n - m,
  (n, m) => n * m,
];

const calc = () => {
  const num1 = randomInteger(0, 99);
  const num2 = randomInteger(0, 99);
  const operator = randomInteger(0, 2);

  const question = `${num1} ${operators[operator]} ${num2}`;
  const rightAnswer = String(operations[operator](num1, num2));

  const gameData = {
    question,
    rightAnswer,
  };

  return gameData;
};

export default () => game(calc, description);

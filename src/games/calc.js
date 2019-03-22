import game from '../game';
import randomInteger from '../utils';

const description = 'What is the result of the expression?';

const operations = {
  '+': (n, m) => n + m,
  '-': (n, m) => n - m,
  '*': (n, m) => n * m,
};

const operators = ['+', '-', '*'];

const calc = () => {
  const num1 = randomInteger(0, 99);
  const num2 = randomInteger(0, 99);
  const operatorIndex = randomInteger(0, operators.length - 1);
  const operator = operators[operatorIndex];
  const question = `${num1} ${operator} ${num2}`;
  const rightAnswer = String(operations[operator](num1, num2));

  const gameData = {
    question,
    rightAnswer,
  };

  return gameData;
};

export default () => game(calc, description);

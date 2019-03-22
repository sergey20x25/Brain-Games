import game from '../game';
import { randomInteger, findGcd } from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const num1 = randomInteger(0, 99);
  const num2 = randomInteger(0, 99);
  const question = `${num1} ${num2}`;
  const rightAnswer = String(findGcd(num1, num2));
  const gameData = {
    question,
    rightAnswer,
  };
  return gameData;
};

export default () => game(gcd, description);

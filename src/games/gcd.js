import game from '../game';
import randomInteger from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (parameter) => {
  if (parameter === 'description') {
    return { description };
  }
  const num1 = randomInteger(0, 99);
  const num2 = randomInteger(0, 99);

  const gcdFinder = (n, m) => {
    if (!m) {
      return n;
    }
    return gcdFinder(m, n % m);
  };

  const question = `${num1} ${num2}`;
  const rightAnswer = String(gcdFinder(num1, num2));
  const gameData = {
    question,
    rightAnswer,
  };
  return gameData;
};

export default () => game(gcd);

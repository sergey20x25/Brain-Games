import game from '../game';
import randomInteger from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = (parameter) => {
  if (parameter === 'description') {
    return { description };
  }
  const question = randomInteger(0, 99);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  const gameData = {
    question,
    rightAnswer,
  };
  return gameData;
};

export default () => game(prime);

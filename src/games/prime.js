import game from '../game';
import { randomInteger, isPrime } from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeData = () => {
  const question = randomInteger(0, 99);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';
  const gameData = {
    question,
    rightAnswer,
  };
  return gameData;
};

export default () => game(primeData, description);

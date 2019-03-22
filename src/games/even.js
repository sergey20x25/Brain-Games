import game from '../game';
import randomInteger from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = n => n % 2 === 0;

const generateEvenData = () => {
  const question = randomInteger(0, 99);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  const gameData = {
    question,
    rightAnswer,
  };
  return gameData;
};

export default () => game(generateEvenData, description);

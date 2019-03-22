import game from '../game';
import { randomInteger, isEven } from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const evenData = () => {
  const question = randomInteger(0, 99);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  const gameData = {
    question,
    rightAnswer,
  };
  return gameData;
};

export default () => game(evenData, description);

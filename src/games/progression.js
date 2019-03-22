import game from '../game';
import { randomInteger, generateProgression } from '../utils';

const description = 'What number is missing in the progression?';

const length = 10;

const progressionData = () => {
  const gameProgression = generateProgression(length);
  const hiddenElementIndex = randomInteger(0, length - 1);
  const rightAnswer = String(gameProgression[hiddenElementIndex]);
  gameProgression[hiddenElementIndex] = '..';
  const question = gameProgression.join(' ');
  const gameData = {
    question,
    rightAnswer,
  };

  return gameData;
};

export default () => game(progressionData, description);

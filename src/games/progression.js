import game from '../game';
import randomInteger from '../utils';

const description = 'What number is missing in the progression?';

const length = 10;

const generateProgression = (len) => {
  const start = randomInteger(0, 99);
  const step = randomInteger(1, 9);
  const progression = [];
  for (let i = 0; i < len; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateProgressionData = () => {
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

export default () => game(generateProgressionData, description);

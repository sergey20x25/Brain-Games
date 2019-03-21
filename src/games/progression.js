import game from '../game';
import randomInteger from '../utils';

const description = 'What number is missing in the progression?';

const length = 10;

const progressionGenerator = () => {
  const start = randomInteger(0, 99);
  const difference = randomInteger(1, 9);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + difference * i);
  }
  return progression;
};

const progressionGame = () => {
  const gameProgression = progressionGenerator();
  const hiddenElement = randomInteger(0, length);
  const rightAnswer = String(gameProgression[hiddenElement]);
  gameProgression[hiddenElement] = '..';
  const question = gameProgression.join(' ');
  const gameData = {
    question,
    rightAnswer,
  };

  return gameData;
};

export default () => game(progressionGame, description);

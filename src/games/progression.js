import game from '../game';
import randomInteger from '../utils';

const description = 'What number is missing in the progression?';

const progressionGenerator = () => {
  const length = 10;
  const start = randomInteger(0, 99);
  const difference = randomInteger(1, 9);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + difference * i);
  }
  return progression;
};

const progressionGame = (parameter) => {
  if (parameter === 'description') {
    return { description };
  }
  const gameProgression = progressionGenerator();
  const elementSelector = randomInteger(0, gameProgression.length);
  const rightAnswer = String(gameProgression[elementSelector]);
  gameProgression[elementSelector] = '..';
  const question = gameProgression.join(' ');
  const gameData = {
    question,
    rightAnswer,
  };

  return gameData;
};

export default () => game(progressionGame);

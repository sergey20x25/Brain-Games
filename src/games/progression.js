import game from '../game';
import randomInteger from '../utils';

const description = 'What number is missing in the progression?';

const progressionGenerator = () => {
  const progLength = 10;
  const progBegin = randomInteger(0, 99);
  const progDifference = randomInteger(1, 9);
  const progArray = [progBegin];
  for (let i = 1; i < progLength; i += 1) {
    progArray.push(progArray[i - 1] + progDifference);
  }
  return progArray;
};

const progressionGame = (parameter) => {
  if (parameter === 'description') {
    return { description };
  }
  const progression = progressionGenerator();
  const elementSelector = randomInteger(0, progression.length);
  const rightAnswer = String(progression[elementSelector]);
  progression[elementSelector] = '..';
  const question = progression.join(' ');
  const questionAndAnswer = {
    question,
    rightAnswer,
  };

  return questionAndAnswer;
};

export default () => game(progressionGame);

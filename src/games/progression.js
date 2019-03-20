import game from '../game';

const progressionGenerator = () => {
  const progLength = 10;
  const progBegin = Math.round(Math.random() * 99);
  const progDifference = Math.round(Math.random() * 10);
  const progArray = [progBegin];
  for (let i = 1; i < progLength; i += 1) {
    progArray.push(progArray[i - 1] + progDifference);
  }
  return progArray;
};

const progressionGame = (parameter) => {
  if (parameter === 'gameRules') {
    return { gameRules: 'What number is missing in the progression?' };
  }
  const progression = progressionGenerator();
  const elementSelector = Math.round(Math.random() * progression.length);
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

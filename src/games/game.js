import readlineSync from 'readline-sync';

const game = (gameFunction) => {
  console.log('\nWelcome to the Brain Games!');
  const rules = gameFunction('gameRules');
  console.log(rules.gameRules);
  const playerName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${playerName}!\n`);
  const numberOfSteps = 3;

  const iter = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const questionAndAnswer = gameFunction();
    const { question, rightAnswer } = questionAndAnswer;
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === rightAnswer) {
      console.log('Correct!');
      iter(count - 1);
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
    }
  };
  return iter(numberOfSteps);
};

export default game;

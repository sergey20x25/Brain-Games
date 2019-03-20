import readlineSync from 'readline-sync';

const numberOfSteps = 3;

const game = (gameFunction) => {
  console.log('\nWelcome to the Brain Games!');
  console.log(gameFunction('description').description);
  const playerName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${playerName}!\n`);

  const iter = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const { question, rightAnswer } = gameFunction();
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
  iter(numberOfSteps);
};

export default game;

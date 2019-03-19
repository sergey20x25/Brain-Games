import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

// brain-even game logic
const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const playerName = readlineSync.question('May I have your name? ');
  const steps = 3;

  const iter = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const isEven = n => n % 2 === 0;
    const question = Math.round(Math.random() * 99);
    const rightAnswer = isEven(question) ? 'yes' : 'no';
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
  return iter(steps);
};

export { greeting, evenGame };

import readlineSync from 'readline-sync';

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// brain-even game logic
const even = (playerName) => {
  const iter = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const number = Math.round(Math.random() * 99);
    const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
      return iter(count - 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${playerName}!`);
  };
  return iter(3);
};

export { getName, even };

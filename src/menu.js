import inquirer from 'inquirer';
import evenGame from './games/even';
import calcGame from './games/calc';
import gcdGame from './games/gcd';
import primeGame from './games/prime';
import progressionGame from './games/progression';

const gamesNamesAndLaunchers = {
  'brain-even': evenGame,
  'brain-calc': calcGame,
  'brain-gcd': gcdGame,
  'brain-prime': primeGame,
  'brain-progression': progressionGame,
};

export default () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'game',
        message: 'Select the game',
        choices: [
          'brain-even',
          'brain-calc',
          'brain-gcd',
          'brain-prime',
          'brain-progression',
        ],
      },
    ])
    .then((answers) => {
      gamesNamesAndLaunchers[answers.game]();
    });
};

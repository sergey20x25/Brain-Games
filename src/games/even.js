import game from '../game';
import randomInteger from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const even = (parameter) => {
  if (parameter === 'description') {
    return { description };
  }
  const isEven = n => n % 2 === 0;
  const question = randomInteger(0, 99);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  const questionAndAnswer = {
    question,
    rightAnswer,
  };
  return questionAndAnswer;
};

export default () => game(even);

import game from '../game';

const even = (parameter) => {
  if (parameter === 'gameRules') {
    return { gameRules: 'Answer "yes" if number even otherwise answer "no".' };
  }
  const isEven = n => n % 2 === 0;
  const question = Math.round(Math.random() * 99);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  const questionAndAnswer = {
    question,
    rightAnswer,
  };
  return questionAndAnswer;
};

export default () => game(even);

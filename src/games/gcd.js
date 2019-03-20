import game from '../game';

const gcd = (parameter) => {
  if (parameter === 'gameRules') {
    return { gameRules: 'Find the greatest common divisor of given numbers.' };
  }
  const num1 = Math.round(Math.random() * 99);
  const num2 = Math.round(Math.random() * 99);

  const gcdFinder = (n, m) => {
    if (!m) {
      return n;
    }
    return gcdFinder(m, n % m);
  };

  const question = `${num1} ${num2}`;
  const rightAnswer = String(gcdFinder(num1, num2));
  const questionAndAnswer = {
    question,
    rightAnswer,
  };
  return questionAndAnswer;
};

export default () => game(gcd);

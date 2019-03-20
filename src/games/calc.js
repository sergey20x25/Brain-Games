const calc = (parameter) => {
  if (parameter === 'gameRules') {
    return { gameRules: 'What is the result of the expression?' };
  }
  const num1 = Math.round(Math.random() * 99);
  const num2 = Math.round(Math.random() * 99);
  const randomOperationSelector = Math.round(Math.random() * 3);
  let question;
  let rightAnswer;
  switch (randomOperationSelector) {
    case 0:
      // mul
      question = `${num1} * ${num2}`;
      rightAnswer = String(num1 * num2);
      break;

    case 1:
      // sub
      question = `${num1} - ${num2}`;
      rightAnswer = String(num1 - num2);
      break;

    default:
      // sum
      question = `${num1} + ${num2}`;
      rightAnswer = String(num1 + num2);
      break;
  }

  const questionAndAnswer = {
    question,
    rightAnswer,
  };

  return questionAndAnswer;
};

export default calc;

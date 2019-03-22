const randomInteger = (min, max) => {
  const rand = Math.round(min - 0.5 + Math.random() * (max - min + 1));
  return rand;
};

const isEven = n => n % 2 === 0;

const generateProgression = (length) => {
  const start = randomInteger(0, 99);
  const step = randomInteger(1, 9);
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const findGcd = (n, m) => {
  if (!m) {
    return n;
  }
  return findGcd(m, n % m);
};

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export {
  randomInteger, isEven, generateProgression, findGcd, isPrime,
};

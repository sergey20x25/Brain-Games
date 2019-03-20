const randomInteger = (min, max) => {
  const rand = Math.round(min - 0.5 + Math.random() * (max - min + 1));
  return rand;
};
console.log(randomInteger(1, 4));

export default randomInteger;

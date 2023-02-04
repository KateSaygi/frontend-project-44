import mainLogic from '../ index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';
const oneSessionResult = () => {
  const getRandomNum = Math.floor(Math.random() * 10);
  const getRandomNum2 = Math.floor(Math.random() * 10);

  const getGcd = (a, b) => {
    if (b !== 0) {
      const c = a % b;
      return getGcd(b, c);
    } return a;
  };

  const a = getRandomNum;
  const b = getRandomNum2;
  const question = `${a} ${b}`;
  const correctAnswer = String(getGcd(a, b));
  return [question, correctAnswer];
};
const playGcd = () => {
  mainLogic(gameRule, oneSessionResult);
};
export default playGcd;

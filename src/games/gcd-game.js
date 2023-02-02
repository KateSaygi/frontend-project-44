import mainLogic from '../ index.js';

const gameRule = 'Find the greatest common divisor of given numbers.';
const oneSessionResult = () => {
  const getRandomNum = Math.floor(Math.random() * 10);
  const getRandomNum2 = Math.floor(Math.random() * 10);
  let a = getRandomNum;
  let b = getRandomNum2;
  const question = `${a} ${b}`;
  let result;
  const calc = () => {
    if (a === b) {
      result = a;
    }
    while (a !== b) {
      if (a > b) {
        a -= b;
      } else {
        b -= a;
      } result = a;
    } return result;
  };
  const calcResult = `${calc(result)}`;
  return [question, calcResult];
};

const playGcd = () => {
  mainLogic(gameRule, oneSessionResult);
};
export default playGcd;

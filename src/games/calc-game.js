import mainLogic from '../ index.js';

const gameRule = 'What is the result of the expression?';
const oneSessionResult = () => {
  const getRandomNum = Math.floor(Math.random() * 5);
  const getRandomNum2 = Math.floor(Math.random() * 3);
  const operator = ['+', '-', '*'];
  const getRandomOperator = Math.floor(Math.random() * operator.length);
  const question = `${getRandomNum} ${operator[getRandomOperator]} ${getRandomNum2}`;
  let result;
  const calc = () => {
    switch (operator[getRandomOperator]) {
      case '+':
        result = (getRandomNum + getRandomNum2);
        break;
      case '-':
        result = (getRandomNum - getRandomNum2);
        break;
      case '*':
        result = (getRandomNum * getRandomNum2);
        break;
      default:
    } return result;
  };
  const calcResult = calc(getRandomNum, getRandomOperator, getRandomNum2);
  return [question, calcResult.toString()];
};
const playCalc = () => {
  mainLogic(gameRule, oneSessionResult);
};
export default playCalc;

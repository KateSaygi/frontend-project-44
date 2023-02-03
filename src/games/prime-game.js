import mainLogic from '../ index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const oneSessionResult = () => {
  const getRandomNum = Math.floor(Math.random() * 20);
  const question = getRandomNum;
  let calcResult = '';
  if (getRandomNum === 1 || getRandomNum <= 0) {
    calcResult = 'no';
  }
  for (let i = 2; i <= (getRandomNum / 2); i += 1) {
    if (getRandomNum % i === 0) {
      calcResult = 'no';
    } else calcResult = 'yes';
  }

  return [question, calcResult];
};

const playPrime = () => {
  mainLogic(gameRule, oneSessionResult);
};
export default playPrime;

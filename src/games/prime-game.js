import runMainLogic from '../ index.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const makeRound = () => {
  const getRandomNum = Math.floor(Math.random() * 10);
  const question = getRandomNum;
  const primeOrNot = () => {
    if (getRandomNum === 1 || getRandomNum <= 0) {
      return 'no';
    }
    for (let i = 2; i <= (getRandomNum / 2); i += 1) {
      if (getRandomNum % i === 0) {
        return 'no';
      }
    } return 'yes';
  };
  const correctAnswer = primeOrNot();
  return [question, correctAnswer];
};

const playPrime = () => {
  runMainLogic(gameRule, makeRound);
};
export default playPrime;

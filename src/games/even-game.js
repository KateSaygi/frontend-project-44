import runMainLogic from '../ index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no"';
const makeRound = () => {
  const getRandomNum = Math.floor(Math.random() * 10);
  const question = getRandomNum;

  const evenOrNot = () => {
    if (question % 2 === 0) {
      return 'yes';
    } return 'no';
  };
  const correctAnswer = evenOrNot(question);
  return [question, correctAnswer];
};

const evenGame = () => {
  runMainLogic(gameRule, makeRound);
};
export default evenGame;

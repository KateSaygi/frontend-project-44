import mainLogic from '../ index.js';

const getRandomNumber = (min, max = 20) => Math.floor(min + Math.random() * (max + 1 - min));
const getProgressionArr = (begin, step, length) => {
  const arr = [];
  const lastNumProgression = (length - 1) * step + begin;
  for (let i = begin; i <= lastNumProgression; i += step) {
    arr.push(i);
  }
  return arr;
};
const gameRule = 'What number is missing in the progression?';

const oneSessionResult = () => {
  const randomBegin = getRandomNumber(2);
  const randomStep = getRandomNumber(2, 5);
  const randomLength = getRandomNumber(5, 10);
  const randomIndex = getRandomNumber(0, randomLength - 1);
  const prograssionArr = getProgressionArr(randomBegin, randomStep, randomLength);

  const getRandomIndex = prograssionArr[randomIndex];
  const calcResult = String(getRandomIndex);
  prograssionArr[randomIndex] = '..';
  const question = prograssionArr.join(' ');

  return [question, calcResult];
};

const playProg = () => {
  mainLogic(gameRule, oneSessionResult);
};
export default playProg;

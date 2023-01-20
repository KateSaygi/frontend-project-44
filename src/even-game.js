import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}!`);
const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  for (let i = 1; i <= 4; i += i) {
    const getRandomNum = Math.floor(Math.random() * 10);
    console.log(`Question: ${getRandomNum}`);
    const answer = readlineSync.question('Your answer:');
    if ((getRandomNum % 2 === 0 && answer === 'yes') || (getRandomNum % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } else if (getRandomNum % 2 !== 0 && answer === 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default evenGame();

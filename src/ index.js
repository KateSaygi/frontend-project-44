import readlineSync from 'readline-sync';

const mainLogic = (gameRule, oneSessionResult) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name} !`);
  console.log(gameRule);

  for (let i = 0; i < 3; i += 1) {
    const [question, calcResult] = oneSessionResult();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your Answer: ');

    if (calcResult === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${calcResult}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  } console.log(`Congratulations, ${name}!`);
};

export default mainLogic;

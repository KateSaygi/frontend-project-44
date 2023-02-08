import readlineSync from 'readline-sync';

const runMainLogic = (gameRule, makeRound) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name} !`);
  console.log(gameRule);
  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = makeRound();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your Answer: ');

    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  } console.log(`Congratulations, ${name}!`);
};

export default runMainLogic;

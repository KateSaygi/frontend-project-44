/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import readlineSync from 'readline-sync';

export default Greeting = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name} !`);
};

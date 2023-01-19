/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
// eslint-disable-next-line no-undef
export const userName = readlineSync.question('May I have your name?');
console.log(`Hello, ${userName} !`);

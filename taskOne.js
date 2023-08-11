const prompt = require('prompt-sync') ();
const input = prompt('Enter a positive even number: ')
const x = parseFloat(input);

  if (x < 0) {
    console.log('Negative number is not allowed.');
  } else if (x % 2 !== 0) {
    console.log('Odd number is not allowed.');
  } else {
    const result = Math.sqrt(x);
    console.log(`Square root of ${x} is ${result}`);
  }

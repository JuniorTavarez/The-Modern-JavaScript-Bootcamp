const makeGuess = number => {
  const min = 1;
  const max = 5;
  let randomNum = Math.ceil(Math.random() * (max - min) + min);
  console.log(randomNum);
  console.log(number);
  if (randomNum === number) {
    return 'you win';
  } else {
    return 'your loose';
  }
};

console.log(makeGuess(1));
console.log(makeGuess(2));
console.log(makeGuess(3));
console.log(makeGuess(4));
console.log(makeGuess(5));

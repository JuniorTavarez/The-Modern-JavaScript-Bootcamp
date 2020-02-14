const totalScore = (sScore, pScore) => {
  const grade = (sScore / pScore) * 100;
  let letterGrade = '';
  if (grade >= 90) {
    letterGrade = 'A';
  } else if (grade >= 80 && grade <= 89) {
    letterGrade = 'B';
  } else if (grade >= 70 && grade <= 79) {
    letterGrade = 'C';
  } else if (grade >= 60 && grade <= 69) {
    letterGrade = 'D';
  } else {
    letterGrade = 'F';
  }
  return `You got a ${letterGrade} ${grade}%!`;
};

console.log(totalScore(18, 20));

function examPrep(input) {
  let index = 0;
  let unsatisfGrades = Number(input[index++]);
  let task = input[index++];
  let grade = Number(input[index++]);
  let sum = 0;
  let problemCount = 0;
  let goodGradeCount = 0;
  let doneCount = 0;
  let lastProblem = "";
  let needBreak = false;

  while (task !== "Enough") {
    if (grade <= 4) {
      problemCount++;
      if (problemCount === unsatisfGrades) {
        needBreak = true;
        break;
      }
    }
    doneCount++;
    sum += grade;
    goodGradeCount++;
    task = input[index++];
    grade = Number(input[index++]);
    if (task === "Enough") {
      lastProblem = input[index - 4];
    }
  }
  if (needBreak) {
    console.log(`You need a break, ${unsatisfGrades} poor grades.`);
  } else {
    let avg = sum / goodGradeCount;
    console.log(`Average score: ${avg.toFixed(2)}`);
    console.log(`Number of problems: ${doneCount}`);
    console.log(`Last problem: ${lastProblem}`);
  }
}

examPrep([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "SpringTime",
  "5",
  "Bus",
  "6",
  "Enough",
]);
examPrep(["2", "Income", "3", "GameInfo", "6", "BestPlayer", "4"]);

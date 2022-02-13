function trainTheTrainers(input) {
  let index = 0;
  const juryMembers = Number(input[index++]);
  let presentation = input[index];
  let presentationCounter = 0;
  let totalGrades = 0;
  while (presentation !== "Finish") {
    let presGrades = 0;
    presentationCounter++;
    for (let i = 0; i < juryMembers; i++) {
      let grade = Number(input[++index]);
      presGrades += grade;
      totalGrades += grade;
    }
    let avgGrade = presGrades / juryMembers;
    console.log(`${presentation} - ${avgGrade.toFixed(2)}.`);
    index++;
    presentation = input[index];
  }
  let finalAvg = totalGrades / (juryMembers * presentationCounter);
  if (presentation === "Finish") {
    console.log(`Student's final assessment is ${finalAvg.toFixed(2)}.`);
  }
}

trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


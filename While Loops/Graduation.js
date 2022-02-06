function graduation(input) {
  let index = 0;
  let name = input[index++];
  let grades = 1;
  let counter = 0;
  let sum = 0;
  while (grades <= 12) {
    let grade = Number(input[index++]);
    if (grade < 4) {
      counter++;
      if (counter > 1) {
        console.log(`${name} has been excluded at ${grades} grade`);
        break;
      }
      continue;
    }
    sum += grade;
    grades++;
  }
  if (counter <= 1) {
    let avg = sum / 12;
    console.log(`${name} graduated. Average grade: ${avg.toFixed(2)}`);
  }
}

graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);

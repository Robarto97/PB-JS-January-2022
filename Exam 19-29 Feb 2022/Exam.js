function exam(input) {
  const studentNum = Number(input[0]);
  let index = 0;
  let counter2to3 = 0;
  let counter3to4 = 0;
  let counter4to5 = 0;
  let counter5plus = 0;
  let totalGrades = 0;

  for (let i = 0; i < studentNum; i++) {
    index++;
    let grade = Number(input[index]);
    totalGrades += grade;
    if (grade >= 2.0 && grade <= 2.99) {
      counter2to3++;
    } else if (grade >= 3.0 && grade <= 3.99) {
      counter3to4++;
    } else if (grade >= 4.0 && grade <= 4.99) {
      counter4to5++;
    } else if (grade >= 5.0) {
      counter5plus++;
    }
  }
  let p2to3 = counter2to3/studentNum*100;
  let p3to4 = counter3to4/studentNum*100;
  let p4to5 = counter4to5/studentNum*100;
  let p5plus = counter5plus/studentNum*100;
  let avg = totalGrades/studentNum;

  console.log(`Top students: ${p5plus.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${p4to5.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${p3to4.toFixed(2)}%`);
  console.log(`Fail: ${p2to3.toFixed(2)}%`);
  console.log(`Average: ${avg.toFixed(2)}`);
}

exam(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])


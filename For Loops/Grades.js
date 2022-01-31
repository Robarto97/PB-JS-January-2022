function grades(input) {
  let index = 0;
  const numStudents = Number(input[index++]);
  let sum = 0;
  let failCounter = 0;
  let goodCounter = 0;
  let veryGoodCounter = 0;
  let topCounter = 0;
  for (let i = 0; i < numStudents; i++) {
    let grade = Number(input[index++]);
    sum += grade;
    if(grade>=2.00 && grade<=2.99){
        failCounter++;
    } else if(grade >=3.00 && grade <= 3.99){
        goodCounter++;
    } else if (grade >=4.00 && grade<=4.99){
        veryGoodCounter++;
    } else if (grade>=5.00){
        topCounter++;
    }
  }

  let failP = failCounter/numStudents*100;
  let goodP = goodCounter/numStudents*100;
  let veryGoodP = veryGoodCounter/numStudents*100;
  let topP = topCounter/numStudents*100;
  let avgGrade = sum / numStudents;
  console.log(`Top students: ${topP.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${veryGoodP.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${goodP.toFixed(2)}%`);
  console.log(`Fail: ${failP.toFixed(2)}%`);
  console.log(`Average: ${avgGrade.toFixed(2)}`);
}

grades([6,2,3,4,5,6,2.2]);

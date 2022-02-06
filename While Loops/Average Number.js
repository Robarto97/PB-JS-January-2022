function averageNumber(input) {
  let index = 0;
  let numCount = Number(input[index]);
  let sum = 0;
  for (let i = 0; i < numCount; i++) {
    index++;
    let number = Number(input[index]);
    sum += number;
  }

  let avg = sum / numCount;
  console.log(avg.toFixed(2));
}

averageNumber([2,6,4]);

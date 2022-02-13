function luckyNumbers(input) {
  const n = Number(input[0]);
  let line = "";

  for (let i = 1111; i <= 9999; i++) {
    let isZero = false;
    let number = "" + i;
    let firstNum = Number(number[0]);
    let secondNum = Number(number[1]);
    let thirdNum = Number(number[2]);
    let forthNum = Number(number[3]);
    let firstSum = firstNum + secondNum;
    let secondSum = thirdNum + forthNum;
    for (let j = 0; j < 4; j++) {
      if (Number(number[j]) === 0) {
        isZero = true;
        break;
      }
    }
    if (isZero) {
      continue;
    }
    if (firstSum === secondSum) {
      if (n % firstSum === 0) {
        line += number + " ";
      }
    }
  }
  console.log(line);
}

luckyNumbers([3]);

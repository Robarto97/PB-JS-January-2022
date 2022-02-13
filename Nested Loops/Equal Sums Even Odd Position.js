function equalSums(input) {
  const start = "" + input[0];
  const end = "" + input[1];
  let line = "";
  for (let i = start; i <= end; i++) {
    let currNum = "" + i;
    let oddSum = 0;
    let evenSum = 0;
    for (let j = 0; j < currNum.length; j++) {
      let currDigit = Number(currNum[j]);
      if (j % 2 === 0) {
        evenSum += currDigit;
      } else {
        oddSum += currDigit;
      }
      
    }
    if (oddSum === evenSum) {
        line += i + " ";
      }
  }
  console.log(line);
}

equalSums(["100000", "100050"]);

function uniqueCodes(input) {
  const firstMaxNum = Number(input[0]);
  const secondMaxNum = Number(input[1]);
  const thirdMaxNum = Number(input[2]);

  for (let i = 1; i <= firstMaxNum; i++) {
    for (let j = 1; j <= secondMaxNum; j++) {
      let isPrime = true;
      if (j === 1) {
        continue;
      }
      for (let m = 2; m < j; m++) {
        if (j % m === 0) {
          isPrime = false;
          break;
        }
      }
      for (let k = 1; k <= thirdMaxNum; k++) {
        if (i % 2 === 0 && k % 2 === 0 && isPrime) {
          console.log(`${i} ${j} ${k}`);
        }
      }
    }
  }
}

uniqueCodes([8,2,8]);

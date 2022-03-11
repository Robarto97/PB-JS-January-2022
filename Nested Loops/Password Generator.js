function passGen(input) {
  const n = Number(input[0]);
  const l = Number(input[1]);
  let line = "";

  for (let firstNum = 1; firstNum <= n; firstNum++) {
    for (let secondNum = 1; secondNum <= n; secondNum++) {
      for (let thirdNum = 97; thirdNum < 97 + l; thirdNum++) {
        for (let forthNum = 97; forthNum < 97 + l; forthNum++) {
          for (let fifthNum = 1; fifthNum <= n; fifthNum++) {
            if (fifthNum > firstNum && fifthNum > secondNum) {
              line += `${firstNum}${secondNum}${String.fromCharCode(
                thirdNum
              )}${String.fromCharCode(forthNum)}${fifthNum} `;
            }
          }
        }
      }
    }
  }
  console.log(line);
}

passGen([3, 2]);

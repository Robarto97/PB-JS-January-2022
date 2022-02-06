function maxNum(input) {
  let index = 0;
  let number = input[index++];
  let max = Number.MIN_SAFE_INTEGER

  while (number !== "Stop") {
    let realNum = Number(number);
    if (realNum > max) {
      max = realNum;
    }
    number = input[index++];
  }
  console.log(max);
}

maxNum(["-10",
"20",
"-30",
"Stop"])


function minNum(input) {
  let index = 0;
  let number = input[index++];
  let min = Number.MAX_SAFE_INTEGER;

  while (number !== "Stop") {
    let realNum = Number(number);
    if (realNum < min) {
      min = realNum;
    }
    number = input[index++];
  }
  console.log(min);
}

minNum(["100", "99", "80", "70", "Stop"]);
minNum(["-10",
"20",
"-30",
"Stop"])

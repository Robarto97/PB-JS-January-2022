function sumTwoNumbers(input) {
  const start = Number(input[0]);
  const end = Number(input[1]);
  const magicNum = Number(input[2]);
  let isFound = false;
  let counter = 0;

  for (let a = start; a <= end; a++) {
    for (let b = start; b <= end; b++) {
        counter++;
      if (a + b === magicNum) {
        console.log(`Combination N:${counter} (${a} + ${b} = ${magicNum})`);
        isFound = true;
        break;
      }
    }
    if (isFound) {
      break;
    }
  }
  if(!isFound){
      console.log(`${counter} combinations - neither equals ${magicNum}`);
  }
}

sumTwoNumbers(["88", 
"888", 
"2000"])



function specialNumbers(input) {
  let n = Number(input[0]);
  
  let line = "";
  for (let i = 1111; i < 9999; i++) {
    let counter = 0;
    let currNumber = "" + i;
    for (let j = 0; j < currNumber.length; j++) {
      if (n % currNumber[j] === 0) {
        counter++;
      }
      if (counter === 4) {
        line += i + " ";
      }
    }
  }
  console.log(line);
}

specialNumbers(["3"]);

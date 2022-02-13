function barcodeGen(input) {
  const start = "" + input[0];
  const end = "" + input[1];
  let startFirst = Number(start[0]);
  let startSecond = Number(start[1]);
  let startThird = Number(start[2]);
  let startForth = Number(start[3]);
  let endFirst = Number(end[0]);
  let endSecond = Number(end[1]);
  let endThird = Number(end[2]);
  let endForth = Number(end[3]);
  let line = "";

  for (let i = startFirst; i <= endFirst; i++) {
    for (let j = startSecond; j <= endSecond; j++) {
      for (let k = startThird; k <= endThird; k++) {
        for (let m = startForth; m <= endForth; m++) {
          if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && m % 2 !== 0) {
            line += `${i}${j}${k}${m} `;
          }
        }
      }
    }
  }
  console.log(line);
}

barcodeGen([2345, 6789]);

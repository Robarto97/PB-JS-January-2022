function numberPyramid(input) {
  const n = Number(input[0]);
  let counter = 1;
  let isBigger = false;

  for (let rows = 1; rows <= n; rows++) {
    let line = "";
    for (let cols = 1; cols <= rows; cols++) {
      if (counter > n) {
        isBigger = true;
        break;
      }
      line += counter + " ";
      counter++;
    }
    console.log(line);
    if (isBigger) {
      break;
    }
  }
}

numberPyramid(["7"]);

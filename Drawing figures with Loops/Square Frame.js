function squareFrame(input) {
  let string = "";
  let n = Number(input[0]);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i > 0 && i < n - 1) {
        if (j === 0 || j === n - 1) {
          string += "| ";
        } else string += "- ";
      } else {
        if (j > 0 && j < n - 1) {
          string += "- ";
        } else {
          string += "+ ";
        }
      }
    }
    string += "\n";
  }
  console.log(string);
}
squareFrame([6]);

function christmasTree(input) {
  const n = Number(input[0]);
  let string = "";

  for (let i = 0; i <= n; i++) {
    for (let j = i; j < n; j++) {
      string += " ";
    }
    for (let j = 0; j <= i - 1; j++) {
      string += "*";
    }
    string += " | ";

    for (let j = i - 1; j >= 0; j--) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

christmasTree([5]);

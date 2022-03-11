function rectangle(input) {
  let string = "";
  let n = Number(input[0]);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      string += "* ";
    }
    string += "\n";
  }
  console.log(string);
}

rectangle([2]);

function triangle(input) {
    let string = "";
    let n = Number(input[0]);
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        string += "$ ";
      }
      string += "\n";
    }
    console.log(string);
  }

  triangle([2])
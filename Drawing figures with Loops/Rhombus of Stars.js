function rhombusOfStars(input) {
  let string = "";
  let n = Number(input[0]);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      string += " ";
    }
    string += "*";
    for (let j = 1; j < i; j++) {
      string += " *";
    }
    string += "\n";
  }

  for (let i = n-1; i > 0 ; i--) {
    for (let j = 1; j <= n - i; j++) {
      string += " ";
    }
    string += "*";
    
    for (let j = 1; j < i; j++) {
      string += " *";
    }
    string += "\n";
  }
  console.log(string);
}

rhombusOfStars([4]);

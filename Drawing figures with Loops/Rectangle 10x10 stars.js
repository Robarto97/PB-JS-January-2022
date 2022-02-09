function rectangle(input) {
  let string = "";
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

rectangle();

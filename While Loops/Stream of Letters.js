function streamOfLetters(input) {
  let index = 0;
  let symbol = input[index];
  let text = "";
  let cCounter = 0;
  let oCounter = 0;
  let nCounter = 0;
  let vault = "";

  while (symbol !== "End") {
    if ((symbol>= "A" && symbol <= "Z") ||(symbol>= "a" && symbol <= "z")) {
      switch (symbol) {
        case "c":
          if (cCounter === 1) {
            vault += symbol;
          } else {
            cCounter++;
          }
          break;
        case "o":
          if (oCounter === 1) {
            vault += symbol;
          } else {
            oCounter++;
          }
          break;
        case "n":
          if (nCounter === 1) {
            vault += symbol;
          } else {
            nCounter++;
          }
          break;
        default:
          vault += symbol;
          break;
      }
    }
    if (cCounter === 1 && oCounter === 1 && nCounter === 1) {
      text += vault + " ";
      cCounter = 0;
      oCounter = 0;
      nCounter = 0;
      vault = "";
    }

    index++;
    symbol = input[index];
  }
  console.log(text);
}

streamOfLetters([
  "o",
  "S",
  "%",
  "o",
  "l",
  "^",
  "v",
  "e",
  "c",
  "n",
  "&",
  "m",
  "e",
  "c",
  "o",
  "n",
  "End",
]);

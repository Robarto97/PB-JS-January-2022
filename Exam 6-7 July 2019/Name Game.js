function nameGame(input) {
  let index = 0;
  let command = input[index];
  let max = Number.MIN_SAFE_INTEGER;
  let winner = "";

  while (command !== "Stop") {
    let points = 0;
    let name = String(command);

    for (let i = 0; i < name.length; i++) {
      index++;
      let number = Number(input[index]);
      let letterNum = name[i].charCodeAt();
      if (number === letterNum) {
        points += 10;
      } else {
        points += 2;
      }
    }
    if (points >= max) {
      max = points;
      winner = name;
    }

    index++;
    command = input[index];
  }
  console.log(`The winner is ${winner} with ${max} points!`);
}

nameGame([
  "Pesho",
  "124",
  "34",
  "111",
  "97",
  "99",
  "Gosho",
  "98",
  "124",
  "88",
  "76",
  "18",
  "Stop",
]);

function gameNumberWars(input) {
  const firstPlayer = input[0];
  const secondPlayer = input[1];
  let firstPoints = 0;
  let secondPoints = 0;

  let command = input[2];
  index = 2;
  while (command !== "End of game") {
    let firstNum = Number(command);
    index++;
    let secondNum = Number(input[index]);
    if (firstNum > secondNum) {
      firstPoints += firstNum - secondNum;
    } else if (firstNum < secondNum) {
      secondPoints += secondNum - firstNum;
    } else {
      console.log(`Number wars!`);
      index++;
      firstNum = Number(input[index++]);
      secondNum = Number(input[index]);
      if (firstNum > secondNum) {
        console.log(`${firstPlayer} is winner with ${firstPoints} points`);
        break;
      } else if (firstNum < secondNum) {
        console.log(`${secondPlayer} is winner with ${secondPoints} points`);
        break;
      }
    }

    index++;
    command = input[index];
  }
  if(command === "End of game"){
      console.log(`${firstPlayer} has ${firstPoints} points`);
      console.log(`${secondPlayer} has ${secondPoints} points`);
  }
}

gameNumberWars(["Aleks",
"Georgi",
"4",
"5",
"3",
"2",
"4",
"3",
"4",
"4",
"5",
"2"])

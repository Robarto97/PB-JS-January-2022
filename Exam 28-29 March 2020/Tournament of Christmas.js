function tournamentChristmas(input) {
  const days = Number(input[0]);
  let index = 0;
  let totalMoney = 0;
  let daysWon = 0;

  for (let i = 0; i < days; i++) {
    index++;
    let command = input[index];
    let money = 0;
    let winCounter = 0;
    let loseCounter = 0;
    while (command !== "Finish") {
      index++;
      let result = input[index];
      switch (result) {
        case "win":
          money += 20;
          winCounter++;
          break;
        case "lose":
          loseCounter++;
          break;
      }

      index++;
      command = input[index];
      if (command === "Finish") {
        if (winCounter > loseCounter) {
          money *= 1.1;
          daysWon++;
        }
        totalMoney += money;
      }
    }
  }
  if (daysWon > days / 2) {
    totalMoney *= 1.2;
    console.log(
      `You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`
    );
  } else {
    console.log(
      `You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`
    );
  }
}

tournamentChristmas([
  "3",
  "darts",
  "lose",
  "handball",
  "lose",
  "judo",
  "win",
  "Finish",
  "snooker",
  "lose",
  "swimming",
  "lose",
  "squash",
  "lose",
  "table tennis",
  "win",
  "Finish",
  "volleyball",
  "win",
  "basketball",
  "win",
  "Finish",
]);

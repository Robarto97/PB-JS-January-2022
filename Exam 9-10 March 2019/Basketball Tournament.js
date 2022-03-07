function basketball(input) {
  let index = 0;
  let command = input[index];
  let winCount = 0;
  let loseCount = 0;
  let totalGames = 0;
  while (command !== "End of tournaments") {
    let nameTournament = command;
    let games = Number(input[++index]);
    let gameCounter = 0;
    totalGames += games;
    for (let i = 0; i < games; i++) {
      let hostPoints = Number(input[++index]);
      let opponentPoints = Number(input[++index]);
      gameCounter++;
      if (hostPoints > opponentPoints) {
        winCount++;
        console.log(
          `Game ${gameCounter} of tournament ${nameTournament}: win with ${
            hostPoints - opponentPoints
          } points.`
        );
      } else {
        loseCount++;
        console.log(
          `Game ${gameCounter} of tournament ${nameTournament}: lost with ${
            opponentPoints - hostPoints
          } points.`
        );
      }
    }

    index++;
    command = input[index];
  }
  let winRate = (winCount / totalGames) * 100;
  let loseRate = (loseCount / totalGames) * 100;
  if (command === "End of tournaments") {
    console.log(`${winRate.toFixed(2)}% matches win`);
    console.log(`${loseRate.toFixed(2)}% matches lost`);
  }
}

basketball([
  "Ballers",
  "3",
  "87",
  "63",
  "56",
  "65",
  "75",
  "64",
  "Sharks",
  "4",
  "64",
  "76",
  "65",
  "86",
  "68",
  "99",
  "45",
  "78",
  "End of tournaments",
]);

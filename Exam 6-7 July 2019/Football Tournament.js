function footballTournament(input) {
  const team = input[0];
  const gamesPlayed = Number(input[1]);
  let index = 1;
  let points = 0;
  let winCount = 0;
  let drawCount = 0;
  let loseCount = 0;

  for (let i = 0; i < gamesPlayed; i++) {
    let result = input[++index];

    switch (result) {
      case "W":
        points += 3;
        winCount++;
        break;
      case "D":
        points += 1;
        drawCount++;
        break;
      case "L":
        loseCount++;
        break;
    }
  }
  if (gamesPlayed > 0) {
    console.log(`${team} has won ${points} points during this season.`);
    console.log(`Total stats:`);
    console.log(`## W: ${winCount}`);
    console.log(`## D: ${drawCount}`);
    console.log(`## L: ${loseCount}`);
    console.log(`Win rate: ${((winCount / gamesPlayed) * 100).toFixed(2)}%`);
  } else {
    console.log(`${team} hasn't played any games during this season.`);
  }
}

footballTournament(["Chelsea",
"0"])

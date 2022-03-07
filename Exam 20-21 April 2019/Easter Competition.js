function easterCompetition(input) {
  const breadNum = Number(input[0]);
  let index = 1;
  let max = 0;
  let winner = "";

  for (let i = 0; i < breadNum; i++) {
    let bakerName = input[index++];
    let command = input[index];
    let totalPoints = 0;
    while (command !== "Stop") {
      let points = Number(command);
      totalPoints += points;
      index++;
      command = input[index];
    }

    if (command === "Stop") {
      console.log(`${bakerName} has ${totalPoints} points.`);
    }
    if (totalPoints > max) {
      console.log(`${bakerName} is the new number 1!`);
      max = totalPoints;
      winner = bakerName;
    }
    index++;
  }
  console.log(`${winner} won competition with ${max} points!`);
}

easterCompetition(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])
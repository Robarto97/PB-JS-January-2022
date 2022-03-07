function darts(input) {
  const playerName = input[0];
  let index = 1;
  let command = input[index];
  let startPoints = 301;
  let successCounter = 0;
  let failedCounter = 0;

  while (command !== "Retire") {
    let zone = command;
    index++;
    let points = Number(input[index]);
    if (zone === "Triple") {
      points *= 3;
    } else if (zone === "Double") {
      points *= 2;
    }
    if (points <= startPoints) {
      startPoints -= points;
      successCounter++;
    } else {
      failedCounter++;
    }

    if (startPoints === 0) {
      console.log(`${playerName} won the leg with ${successCounter} shots.`);
      break;
    }

    index++;
    command = input[index];
  }
  if (command === "Retire") {
    console.log(
      `${playerName} retired after ${failedCounter} unsuccessful shots.`
    );
  }
}
darts([
  "Rob Cross",
  "Triple",
  "20",
  "Triple",
  "20",
  "Triple",
  "20",
  "Triple",
  "20",
  "Double",
  "20",
  "Triple",
  "20",
  "Double",
  "5",
  "Triple",
  "10",
  "Double",
  "6",
  "Retire",
]);

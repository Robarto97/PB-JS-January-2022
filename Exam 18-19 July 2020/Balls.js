function balls(input) {
  let index = 0;
  const ballNum = Number(input[index++]);
  let totalPoints = 0;
  let redCounter = 0;
  let orangeCounter = 0;
  let yellowCounter = 0;
  let whiteCounter = 0;
  let blackCounter = 0;
  let diffCounter = 0;

  for (let i = 0; i < ballNum; i++) {
    let color = input[index++];
    switch (color) {
      case "red":
        totalPoints += 5;
        redCounter++;
        break;
      case "orange":
        totalPoints += 10;
        orangeCounter++;
        break;
      case "yellow":
        totalPoints += 15;
        yellowCounter++;
        break;
      case "white":
        totalPoints += 20;
        whiteCounter++;
        break;
      case "black":
        totalPoints = Math.floor(totalPoints / 2);
        blackCounter++;
        break;
      default:
        diffCounter++;
        break;
    }
  }

  console.log(`Total points: ${totalPoints}`);
  console.log(`Red balls: ${redCounter}`);
  console.log(`Orange balls: ${orangeCounter}`);
  console.log(`Yellow balls: ${yellowCounter}`);
  console.log(`White balls: ${whiteCounter}`);
  console.log(`Other colors picked: ${diffCounter}`);
  console.log(`Divides from black balls: ${blackCounter}`);
}

balls([
  10,
  "white",
  "white",
  "ee",
  "red",
  "orange",
  "red",
  "black",
  "black",
  "black",
  "black",
]);

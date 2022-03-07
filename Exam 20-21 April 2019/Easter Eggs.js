function easterEggs(input) {
  const eggsNum = Number(input[0]);
  let index = 1;
  let redCount = 0;
  let orangeCount = 0;
  let blueCount = 0;
  let greenCount = 0;
  let max = 0;
  let color = "";
  for (let i = 0; i < eggsNum; i++) {
    let color = input[index++];
    switch (color) {
      case "red":
        redCount++;
        break;
      case "orange":
        orangeCount++;
        break;
      case "blue":
        blueCount++;
        break;
      case "green":
        greenCount++;
        break;
    }
  }
  max = Math.max(redCount, orangeCount, greenCount, blueCount);
  if (max === redCount) {
    color = "red";
  } else if (max === orangeCount) {
    color = "orange";
  } else if (max === greenCount) {
    color = "green";
  } else if (max === blueCount) {
    color = "blue";
  }

  console.log(`Red eggs: ${redCount}`);
  console.log(`Orange eggs: ${orangeCount}`);
  console.log(`Blue eggs: ${blueCount}`);
  console.log(`Green eggs: ${greenCount}`);
  console.log(`Max eggs: ${max} -> ${color}`);
}

easterEggs(["4",
"blue",
"red",
"blue",
"orange"])

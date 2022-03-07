function fitnessCenter(input) {
  const visitors = Number(input[0]);
  let index = 0;
  let backCount = 0;
  let chestCount = 0;
  let legCount = 0;
  let absCount = 0;
  let shakeCount = 0;
  let barCount = 0;

  for (let i = 0; i < visitors; i++) {
    let activity = input[++index];
    switch (activity) {
      case "Back":
        backCount++;
        break;
      case "Chest":
        chestCount++;
        break;
      case "Legs":
        legCount++;
        break;
      case "Abs":
        absCount++;
        break;
      case "Protein shake":
        shakeCount++;
        break;
      case "Protein bar":
        barCount++;
        break;
    }
  }
  let workout =
    ((backCount + chestCount + legCount + absCount) / visitors) * 100;
  let products = ((shakeCount + barCount) / visitors) * 100;
  console.log(`${backCount} - back`);
  console.log(`${chestCount} - chest`);
  console.log(`${legCount} - legs`);
  console.log(`${absCount} - abs`);
  console.log(`${shakeCount} - protein shake`);
  console.log(`${barCount} - protein bar`);
  console.log(workout.toFixed(2) + "% - work out");
  console.log(products.toFixed(2) + "% - protein");
}

fitnessCenter([
  "10",
  "Back",
  "Chest",
  "Legs",
  "Abs",
  "Protein shake",
  "Protein bar",
  "Protein shake",
  "Protein bar",
  "Legs",
  "Abs",
]);

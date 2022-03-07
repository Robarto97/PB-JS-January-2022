function movieStars(input) {
  let budget = Number(input[0]);
  let index = 1;
  let command = input[index];
  while (command !== "ACTION") {
    let actor = command;

    if (actor.length <= 15) {
      index++;
      let income = Number(input[index]);
      if (income > budget) {
        budget -= income;
        break;
      }
      budget -= income;
    } else {
      budget *= 0.8;
    }

    index++;
    command = input[index];
  }
  if (budget >= 0) {
    console.log(`We are left with ${budget.toFixed(2)} leva.`);
  } else {
    console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
  }
}
movieStars([
  "170000",
  "Ben Affleck",
  "40000.50",
  "Zahari Baharov",
  "80000",
  "Tom Hanks",
  "2000.99",
  "ACTION",
]);

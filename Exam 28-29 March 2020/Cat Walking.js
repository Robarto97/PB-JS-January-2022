function catWalking(input) {
  const minutesWalk = Number(input[0]);
  const walksPerDay = Number(input[1]);
  const consumedCalories = Number(input[2]);

  const totalMinutes = minutesWalk * walksPerDay;
  const burnedCalories = totalMinutes * 5;
  const halfConsumedCalories = consumedCalories / 2;
  if (burnedCalories >= halfConsumedCalories) {
    console.log(
      `Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalories}.`
    );
  } else
    console.log(
      `No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`
    );
}

catWalking(["30", "3", "600"]);
catWalking(["15", "2", "500"]);

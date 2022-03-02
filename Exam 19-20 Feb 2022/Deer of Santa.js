function deerOfSanta(input) {
  const daysGone = Number(input[0]);
  const foodLeftKg = Number(input[1]);
  const foodFirstDeer = Number(input[2]);
  const foodSecondDeer = Number(input[3]);
  const foodThirdDeer = Number(input[4]);

  const totalFoodDeer =
    daysGone * (foodFirstDeer + foodSecondDeer + foodThirdDeer);
  const diff = Math.abs(foodLeftKg - totalFoodDeer);

  if (totalFoodDeer <= foodLeftKg) {
    console.log(`${Math.floor(diff)} kilos of food left.`);
  } else {
    console.log(`${Math.ceil(diff)} more kilos of food are needed.`);
  }
}

deerOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])


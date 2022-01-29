function fishingBoat(input) {
  const priceBoatSpring = 3000;
  const priceBoatSummerAutumn = 4200;
  const priceBoatWinter = 2600;

  const budget = Number(input[0]);
  const season = input[1];
  const countFishers = Number(input[2]);
  let finalPrice = 0;

  switch (season) {
    case "Spring":
      if (countFishers <= 6) {
        finalPrice = priceBoatSpring * 0.9;
      } else if (countFishers >= 7 && countFishers <= 11) {
        finalPrice = priceBoatSpring * 0.85;
      } else if (countFishers >= 12) {
        finalPrice = priceBoatSpring * 0.75;
      }
      break;
    case "Summer":
    case "Autumn":
      if (countFishers <= 6) {
        finalPrice = priceBoatSummerAutumn * 0.9;
      } else if (countFishers >= 7 && countFishers <= 11) {
        finalPrice = priceBoatSummerAutumn * 0.85;
      } else if (countFishers >= 12) {
        finalPrice = priceBoatSummerAutumn * 0.75;
      }
      break;
    case "Winter":
      if (countFishers <= 6) {
        finalPrice = priceBoatWinter * 0.9;
      } else if (countFishers >= 7 && countFishers <= 11) {
        finalPrice = priceBoatWinter * 0.85;
      } else if (countFishers >= 12) {
        finalPrice = priceBoatWinter * 0.75;
      }
      break;
  }
  if (countFishers % 2 === 0 && season != "Autumn") {
    finalPrice = finalPrice * 0.95;
  }
  if (budget >= finalPrice) {
    const moneyLeft = budget - finalPrice;
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else {
    const moneyNeeded = finalPrice - budget;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
  }
}

fishingBoat(["3000", "Summer", "11"]);

fishingBoat(["3600", "Autumn", "6"]);

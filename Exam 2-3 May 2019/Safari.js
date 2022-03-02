function safari(input) {
  const fuelLitterPrice = 2.1;
  const guidePrice = 100;

  const budget = Number(input[0]);
  const fuelLitterNeeded = Number(input[1]);
  const day = input[2];

  let fuelPrice = fuelLitterPrice * fuelLitterNeeded;
  let price = fuelPrice + guidePrice;
  if (day === "Saturday") {
    price *= 0.9;
  } else if (day === "Sunday") {
    price *= 0.8;
  }

  let diff = Math.abs(budget - price);
  if (budget >= price) {
    console.log(`Safari time! Money left: ${diff.toFixed(2)} lv.`);
  } else {
    console.log(`Not enough money! Money needed: ${diff.toFixed(2)} lv.`);
  }
}

safari(["120",
"30",
"Saturday"])


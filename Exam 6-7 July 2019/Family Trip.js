function familyTrip(input) {
  const budget = Number(input[0]);
  const nights = Number(input[1]);
  const pricePerNight = Number(input[2]);
  const percentageCosts = Number(input[3]);

  let totalPriceNights = nights * pricePerNight;
  if (nights > 7) {
    totalPriceNights *= 0.95;
  }

  let costs = (budget * percentageCosts) / 100;
  let totalPrice = totalPriceNights + costs;
  let diff = Math.abs(budget - totalPrice);
  if(budget >= totalPrice){
      console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
  } else {
      console.log(`${diff.toFixed(2)} leva needed.`);
  }
}

familyTrip(["500",
"7",
"66",
"15"])


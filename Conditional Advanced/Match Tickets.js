function matchTickets(input) {
  const budget = Number(input[0]);
  const category = input[1];
  const people = Number(input[2]);

  const priceVip = 499.99;
  const priceNormal = 249.99;
  let moneyLeft = 0;
  let totalPriceForTickets = 0;

  if (people >= 1 && people <= 4) {
    moneyLeft = budget * 0.25;
  } else if (people >= 5 && people <= 9) {
    moneyLeft = budget * 0.4;
  } else if (people >= 10 && people <= 24) {
    moneyLeft = budget * 0.5;
  } else if (people >= 25 && people <= 49) {
    moneyLeft = budget * 0.6;
  } else if (people >= 50) {
    moneyLeft = budget * 0.75;
  }
  if (category === "Normal") {
    totalPriceForTickets = priceNormal * people;
  } else if (category === "VIP") {
    totalPriceForTickets = priceVip * people;
  }
  const difference = Math.abs(totalPriceForTickets - moneyLeft);
  if (totalPriceForTickets < moneyLeft) {
    console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);
  } else
    console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
}

matchTickets([30000, "VIP", 49]);

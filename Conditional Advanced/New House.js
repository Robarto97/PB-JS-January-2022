function newHouse(input) {
  const flowerType = input[0];
  const countFlowers = Number(input[1]);
  const budget = Number(input[2]);

  const priceRoses = 5;
  const priceDahlias = 3.8;
  const priceTulips = 2.8;
  const priceNarcissus = 3;
  const priceGladiolus = 2.5;
  let finalPrice = 0;

  switch (flowerType) {
    case "Roses":
      if (countFlowers > 80) {
        finalPrice -= countFlowers * priceRoses * 0.1;
      }
      finalPrice += countFlowers * priceRoses;
      break;
    case "Dahlias":
      if (countFlowers > 90) {
        finalPrice -= countFlowers * priceDahlias * 0.15;
      }
      finalPrice += countFlowers * priceDahlias;
      break;
    case "Tulips":
      if (countFlowers > 80) {
        finalPrice -= countFlowers * priceTulips * 0.15;
      }
      finalPrice += countFlowers * priceTulips;
      break;
    case "Narcissus":
      if (countFlowers < 120) {
        finalPrice += countFlowers * priceNarcissus * 0.15;
      }
      finalPrice += countFlowers * priceNarcissus;
      break;
    case "Gladiolus":
      if (countFlowers < 80) {
        finalPrice += countFlowers * priceGladiolus * 0.2;
      }
      finalPrice += countFlowers * priceGladiolus;
      break;
  }
  if (budget >= finalPrice) {
    const moneyLeft = budget - finalPrice;
    console.log(
      `Hey, you have a great garden with ${countFlowers} ${flowerType} and ${moneyLeft.toFixed(
        2
      )} leva left.`
    );
  } else {
    const moneyNeeded = finalPrice - budget;
    console.log(
      `Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`
    );
  }
}

newHouse(["Roses", "55", "250"]);
newHouse(["Tulips", "88", "260"]);
newHouse(["Narcissus", "119", "360"]);

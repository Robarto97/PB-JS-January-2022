function touristShop(input) {
  let budget = Number(input[0]);
  let index = 1;
  let command = input[index];
  let productCounter = 0;
  let totalPrice = 0;

  while (command !== "Stop") {
    index++;
    let price = Number(input[index]);
    productCounter++;
    if (productCounter % 3 === 0) {
      price *= 0.5;
    }
    if (price > budget) {
      console.log(`You don't have enough money!`);
      console.log(`You need ${(price - budget).toFixed(2)} leva!`);
      break;
    }

    budget -= price;
    totalPrice += price;

    index++;
    command = input[index];
  }
  if (command === "Stop") {
    console.log(
      `You bought ${productCounter} products for ${totalPrice.toFixed(2)} leva.`
    );
  }
}

touristShop(["54", "Thermal underwear", "24", "Sunscreen", "45"]);

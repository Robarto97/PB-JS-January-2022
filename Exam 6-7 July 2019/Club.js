function club(input) {
  const targetProfit = Number(input[0]);
  let index = 1;
  let drink = input[index++];
  let amount = Number(input[index]);
  let totalPrice = 0;

  while (drink !== "Party!") {
    let sum = 0;
    let price = 0;
    sum += drink.length;
    price += sum * amount;
    if (price % 2 !== 0) {
      price *= 0.75;
    }
    totalPrice += price;

    if (totalPrice >= targetProfit) {
      break;
    }
    index++;
    drink = input[index++];
    amount = Number(input[index]);
  }
  let diff = Math.abs(targetProfit - totalPrice);

  if (drink === "Party!") {
    console.log(`We need ${diff.toFixed(2)} leva more.`);
  }
  if (totalPrice >= targetProfit) {
    console.log("Target acquired.");
  }
  console.log(`Club income - ${totalPrice.toFixed(2)} leva.`);
}

club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);

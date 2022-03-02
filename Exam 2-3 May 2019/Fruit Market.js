function fruitMarket(num1,num2,num3,num4,num5) {
  const strawberriesPrice = Number(num1);
  const bananasAmount = Number(num2);
  const orangesAmount = Number(num3);
  const raspberriesAmount = Number(num4);
  const strawberriesAmount = Number(num5);

  const raspberriesPrice = 0.5 * strawberriesPrice;
  const orangesPrice = 0.6 * raspberriesPrice;
  const bananasPrice = 0.2 * raspberriesPrice;

  let price =
    strawberriesPrice * strawberriesAmount +
    raspberriesPrice * raspberriesAmount +
    orangesPrice * orangesAmount +
    bananasPrice * bananasAmount;

  console.log(price.toFixed(2));
}

fruitMarket(48, 10, 3.3, 6.5, 1.7);

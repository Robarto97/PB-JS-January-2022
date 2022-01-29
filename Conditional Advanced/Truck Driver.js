function truckDriver(input) {
  const season = input[0];
  const kmPerMonth = Number(input[1]);

  const kmShortSpringAutumnPrice = 0.75;
  const kmShortSummerPrice = 0.9;
  const kmShortWinterPrice = 1.05;
  const kmMiddleSpringAutumnPrice = 0.95;
  const kmMiddleSummerPrice = 1.1;
  const kmMiddleWinterPrice = 1.25;
  const kmLongPrice = 1.45;
  let price = 0;

  if (kmPerMonth <= 5000) {
    if (season === "Spring" || season === "Autumn") {
      price = kmPerMonth * kmShortSpringAutumnPrice;
    } else if (season === "Summer") {
      price = kmPerMonth * kmShortSummerPrice;
    } else if (season === "Winter") {
      price = kmPerMonth * kmShortWinterPrice;
    }
  } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
    if (season === "Spring" || season === "Autumn") {
      price = kmPerMonth * kmMiddleSpringAutumnPrice;
    } else if (season === "Summer") {
      price = kmPerMonth * kmMiddleSummerPrice;
    } else if (season === "Winter") {
      price = kmPerMonth * kmMiddleWinterPrice;
    }
  } else if (kmPerMonth > 10000 && kmPerMonth <= 20000) {
    price = kmPerMonth * kmLongPrice;
  }
  price = price * 4 * 0.9;
  console.log(price.toFixed(2));
}

truckDriver(["Winter", 4350]);

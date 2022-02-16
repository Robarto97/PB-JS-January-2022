function coffeeMachine(input) {
  const drink = input[0];
  const sugar = input[1];
  const numDrinks = Number(input[2]);
  let price = 0;

  switch (drink) {
    case "Espresso":
      switch (sugar) {
        case "Without":
          price = 0.9;
          break;
        case "Normal":
          price = 1;
          break;
        case "Extra":
          price = 1.2;
          break;
      }
      break;
    case "Cappuccino":
      switch (sugar) {
        case "Without":
          price = 1;
          break;
        case "Normal":
          price = 1.2;
          break;
        case "Extra":
          price = 1.6;
          break;
      }
      break;
    case "Tea":
      switch (sugar) {
        case "Without":
          price = 0.5;
          break;
        case "Normal":
          price = 0.6;
          break;
        case "Extra":
          price = 0.7;
          break;
      }
      break;
  }
  price *= numDrinks;
  if (sugar === "Without") {
    price *= 0.65;
  }
  if (drink === "Espresso" && numDrinks >= 5) {
    price *= 0.75;
  }
  if (price > 15) {
    price *= 0.8;
  }
  console.log(
    `You bought ${numDrinks} cups of ${drink} for ${price.toFixed(2)} lv.`
  );
}

coffeeMachine(["Cappuccino", "Normal", "13"]);

// coffeeMachine(["Tea", "Extra", "3"]);

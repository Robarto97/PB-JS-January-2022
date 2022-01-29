function fruitShop(input) {
  const fruit = input[0];
  const day = input[1];
  const quantity = Number(input[2]);
  let price = 0;

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      switch (fruit) {
        case "banana":
          price = 2.5 * quantity;
          break;
        case "apple":
          price = 1.2 * quantity;
          break;
        case "orange":
          price = 0.85 * quantity;
          break;
        case "grapefruit":
          price = 1.45 * quantity;
          break;
        case "kiwi":
          price = 2.7 * quantity;
          break;
        case "pineapple":
          price = 5.5 * quantity;
          break;
        case "grapes":
          price = 3.85 * quantity;
          break;
        default:
          console.log("error");
          break;
      }
      break;
    case "Saturday":
    case "Sunday":
      switch (fruit) {
        case "banana":
          price = 2.7 * quantity;
          break;
        case "apple":
          price = 1.25 * quantity;
          break;
        case "orange":
          price = 0.9 * quantity;
          break;
        case "grapefruit":
          price = 1.6 * quantity;
          break;
        case "kiwi":
          price = 3 * quantity;
          break;
        case "pineapple":
          price = 5.6 * quantity;
          break;
        case "grapes":
          price = 4.2 * quantity;
          break;
        default:
          console.log("error");
          break;
      }
      break;
    default:
      console.log("error");
      break;
  }
  if (price > 0) console.log(price.toFixed(2));
}

fruitShop(["tomato", "Monday", "0.5"]);

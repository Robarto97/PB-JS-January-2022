function energyBooster(input) {
  const fruit = input[0];
  const size = input[1];
  const setNumber = Number(input[2]);
  let price = 0;

  switch (fruit) {
    case "Watermelon":
      switch (size) {
        case "small":
          price = 56 * 2;
          break;
        case "big":
          price = 28.7 * 5;
          break;
      }
      break;
    case "Mango":
      switch (size) {
        case "small":
          price = 36.66 * 2;
          break;
        case "big":
          price = 19.6 * 5;
          break;
      }
      break;
    case "Pineapple":
      switch (size) {
        case "small":
          price = 42.1 * 2;
          break;
        case "big":
          price = 24.8 * 5;
          break;
      }
      break;
    case "Raspberry":
      switch (size) {
        case "small":
          price = 20 * 2;
          break;
        case "big":
          price = 15.2 * 5;
          break;
      }
      break;
  }

  price *= setNumber;
  if (price >= 400 && price <= 1000) {
    price *= 0.85;
  } else if (price > 1000) {
    price *= 0.5;
  }

  console.log(price.toFixed(2) + " lv.");
}

energyBooster(["Watermelon", "big", "4"]);
energyBooster(["Pineapple", "small", "1"]);
energyBooster(["Raspberry", "small", "50"]);
energyBooster(["Mango", "big", "8"]);

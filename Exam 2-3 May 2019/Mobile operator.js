function mobileOperator(input) {
  const term = input[0];
  const type = input[1];
  const mobileNet = input[2];
  const months = Number(input[3]);

  let price = 0;
  switch (term) {
    case "one":
      switch (type) {
        case "Small":
          price = 9.98;
          break;
        case "Middle":
          price = 18.99;
          break;
        case "Large":
          price = 25.98;
          break;
        case "ExtraLarge":
          price = 35.99;
          break;
      }
      break;
    case "two":
      switch (type) {
        case "Small":
          price = 8.58;
          break;
        case "Middle":
          price = 17.09;
          break;
        case "Large":
          price = 23.59;
          break;
        case "ExtraLarge":
          price = 31.79;
          break;
      }
      break;
  }
  if (mobileNet === "yes") {
    if (price <= 10) {
      price += 5.5;
    } else if (price <= 30) {
      price += 4.35;
    } else {
      price += 3.85;
    }
  }
  if (term === "two") {
    price *= 0.9625;
  }
  price *= months;
  console.log(price.toFixed(2) + " lv.");
}

mobileOperator(["two",
"Small",
"yes",
"20"])

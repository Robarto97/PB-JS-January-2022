function alumJoinery(input) {
  const joinerNum = Number(input[0]);
  const type = input[1];
  const shipmentType = input[2];
  let price = 0;

  switch (type) {
    case "90X130":
      price = 110 * joinerNum;
      if (joinerNum > 60) {
        price *= 0.92;
      } else if (joinerNum > 30) {
        price *= 0.95;
      }
      break;
    case "100X150":
      price = 140 * joinerNum;
      if (joinerNum > 80) {
        price *= 0.9;
      } else if (joinerNum > 40) {
        price *= 0.94;
      }
      break;
    case "130X180":
      price = 190 * joinerNum;
      if (joinerNum > 50) {
        price *= 0.88;
      } else if (joinerNum > 20) {
        price *= 0.93;
      }
      break;
    case "200X300":
      price = 250 * joinerNum;
      if (joinerNum > 50) {
        price *= 0.86;
      } else if (joinerNum > 25) {
        price *= 0.91;
      }
      break;
  }

  if (shipmentType === "With delivery") {
    price += 60;
  }
  if (joinerNum > 99) {
    price *= 0.96;
  }

  if (joinerNum < 10) {
    console.log("Invalid order");
  } else console.log(`${price.toFixed(2)} BGN`);
}

alumJoinery(["40", "90X130", "Without delivery"]);
alumJoinery(["105", "100X150", "With delivery"]);
alumJoinery(["2", "130X180", "With delivery"]);

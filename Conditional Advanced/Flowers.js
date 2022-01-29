function flowers(input) {
  const chrysantemums = Number(input[0]);
  const roses = Number(input[1]);
  const tulips = Number(input[2]);
  const season = input[3];
  const holiday = input[4];

  const chrysantemumsSpringSummerPrice = 2;
  const chrysantemumsAutumnWinterPrice = 3.75;
  const rosesSpringSummerPrice = 4.1;
  const rosesAutumnWinterPrice = 4.5;
  const tulipsSpringSummerPrice = 2.5;
  const tulipsAutumnWinterPrice = 4.15;

  const flowers = chrysantemums + roses + tulips;
  let flowersPrice = 0;
  switch (season) {
    case "Spring":
    case "Summer":
      flowersPrice =
        chrysantemums * chrysantemumsSpringSummerPrice +
        roses * rosesSpringSummerPrice +
        tulips * tulipsSpringSummerPrice;
      break;
    case "Autumn":
    case "Winter":
      flowersPrice =
        chrysantemums * chrysantemumsAutumnWinterPrice +
        roses * rosesAutumnWinterPrice +
        tulips * tulipsAutumnWinterPrice;
      break;
  }
  if (holiday === "Y") {
    flowersPrice *= 1.15;
  }
  if (tulips > 7 && season === "Spring") {
    flowersPrice *= 0.95;
  }
  if (roses >= 10 && season === "Winter") {
    flowersPrice *= 0.9;
  }
  if (flowers > 20) {
    flowersPrice *= 0.8;
  }
  flowersPrice += 2;
  console.log(flowersPrice.toFixed(2));
}

flowers([10, 10, 10, "Autumn", "N"]);

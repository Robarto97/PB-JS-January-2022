function vacation(input) {
  const budget = Number(input[0]);
  const season = input[1];

  let location = "";
  let settlement = "";
  let price = 0;

  if (budget <= 1000) {
    settlement = "Camp";
    if (season === "Summer") {
      location = "Alaska";
      price = budget * 0.65;
    } else if (season === "Winter") {
      location = "Morocco";
      price = budget * 0.45;
    }
  } else if (budget > 1000 && budget <= 3000) {
    settlement = "Hut";
    if (season === "Summer") {
      location = "Alaska";
      price = budget * 0.8;
    } else if (season === "Winter") {
      location = "Morocco";
      price = budget * 0.6;
    }
  } else if (budget > 3000) {
    settlement = "Hotel";
    price = budget * 0.9;
    if (season === "Summer") {
      location = "Alaska";
    } else if (season === "Winter") {
      location = "Morocco";
    }
  }
  console.log(`${location} - ${settlement} - ${price.toFixed(2)}`);
}

vacation([799.5, "Winter"]);

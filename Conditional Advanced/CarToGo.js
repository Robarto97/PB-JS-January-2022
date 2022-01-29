function carToGo(input) {
  const budget = Number(input[0]);
  const season = input[1];

  const classType = ["Economy class", "Compact class", "Luxury class"];
  const carType = ["Cabrio", "Jeep"];
  let price = 0;
  let car = "";
  let className = "";

  if (budget <= 100) {
    className = classType[0];
    if (season === "Summer") {
      price = budget * 0.35;
      car = carType[0];
    } else if (season === "Winter") {
      price = budget * 0.65;
      car = carType[1];
    }
  } else if (budget > 100 && budget <= 500) {
    className = classType[1];
    if (season === "Summer") {
      price = budget * 0.45;
      car = carType[0];
    } else if (season === "Winter") {
      price = budget * 0.8;
      car = carType[1];
    }
  } else if (budget > 500) {
    className = classType[2];
    price = budget * 0.9;
    car = carType[1];
  }
  console.log(className);
  console.log(`${car} - ${price.toFixed(2)}`);
}

carToGo([1010, "Summer"]);

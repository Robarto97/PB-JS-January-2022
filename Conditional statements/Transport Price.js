function transport(input) {
  const km = Number(input[0]);
  const time = input[1];

  const taxiPriceDay = 0.79;
  const taxiPriceNight = 0.9;
  const busPrice = 0.09;
  const trainPrice = 0.06;
  let price = "";

  if (km < 20) {
    if (time === "day") {
      price = 0.7 + km * taxiPriceDay;
    } else if (time === "night") {
      price = 0.7 + km * taxiPriceNight;
    }
  } else if (km < 100) {
    price = km * busPrice;
  } else {
    price = km * trainPrice;
  }
  console.log(Number(price).toFixed(2));
}

transport([5,"day"]);
transport([7,"night"]);
transport([25,"day"]);
transport([180,"night"]);

function movieDestination(input) {
  const budget = Number(input[0]);
  const destination = input[1];
  const season = input[2];
  const days = Number(input[3]);
  let price = 0;

  switch (destination) {
    case "Dubai":
      switch (season) {
        case "Winter":
          price = 45000;
          break;
        case "Summer":
          price = 40000;
          break;
      }
      break;
    case "Sofia":
      switch (season) {
        case "Winter":
          price = 17000;
          break;
        case "Summer":
          price = 12500;
          break;
      }
      break;
    case "London":
      switch (season) {
        case "Winter":
          price = 24000;
          break;
        case "Summer":
          price = 20250;
          break;
      }
      break;
  }
  let totalPrice = price * days;
  if (destination === "Dubai") {
    totalPrice *= 0.7;
  } else if (destination === "Sofia") {
    totalPrice *= 1.25;
  }
  let diff = Math.abs(totalPrice - budget);
  if (budget >= totalPrice) {
    console.log(
      `The budget for the movie is enough! We have ${diff.toFixed(
        2
      )} leva left!`
    );
  } else {
    console.log(`The director needs ${diff.toFixed(2)} leva more!`);
  }
}

movieDestination(["1000000",
"Dubai",
"Summer",
"5"])


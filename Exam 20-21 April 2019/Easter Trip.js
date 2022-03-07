function easterTrip(input) {
  const destination = input[0];
  const dates = input[1];
  const nights = Number(input[2]);
  let price = 0;

  switch (destination) {
    case "France":
      switch (dates) {
        case "21-23":
          price = 30;
          break;
        case "24-27":
          price = 35;
          break;
        case "28-31":
          price = 40;
          break;
      }
      break;
    case "Italy":
      switch (dates) {
        case "21-23":
          price = 28;
          break;
        case "24-27":
          price = 32;
          break;
        case "28-31":
          price = 39;
          break;
      }
      break;
    case "Germany":
      switch (dates) {
        case "21-23":
          price = 32;
          break;
        case "24-27":
          price = 37;
          break;
        case "28-31":
          price = 43;
          break;
      }
      break;
  }
  let totalPrice = nights * price;
  console.log(`Easter trip to ${destination} : ${totalPrice.toFixed(2)} leva.`);
}


easterTrip(["France",
"28-31",
"8"])



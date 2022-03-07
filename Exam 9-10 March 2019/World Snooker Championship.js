function snookerChamp(input) {
  const phase = input[0];
  const typeTicket = input[1];
  const ticketNum = Number(input[2]);
  const picture = input[3];
  let price = 0;

  switch (phase) {
    case "Quarter final":
      switch (typeTicket) {
        case "Standard":
          price = 55.5;
          break;
        case "Premium":
          price = 105.2;
          break;
        case "VIP":
          price = 118.9;
          break;
      }
      break;
    case "Semi final":
      switch (typeTicket) {
        case "Standard":
          price = 75.88;
          break;
        case "Premium":
          price = 125.22;
          break;
        case "VIP":
          price = 300.4;
          break;
      }
      break;
    case "Final":
      switch (typeTicket) {
        case "Standard":
          price = 110.1;
          break;
        case "Premium":
          price = 160.66;
          break;
        case "VIP":
          price = 400;
          break;
      }
      break;
  }
  let totalPrice = ticketNum * price;

  if (totalPrice > 4000) {
    totalPrice *= 0.75;
  } else if (totalPrice > 2500) {
    totalPrice *= 0.9;
    if (picture === "Y") {
      totalPrice += ticketNum * 40;
    }
  } else {
    if (picture === "Y") {
      totalPrice += ticketNum * 40;
    }
  }

  console.log(totalPrice.toFixed(2));
}

snookerChamp(["Quarter final", "Standard", "11", "N"]);

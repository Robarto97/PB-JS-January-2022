function filmPremiere(input) {
  const projection = input[0];
  const package = input[1];
  const ticketNum = Number(input[2]);
  let price = 0;

  switch (projection) {
    case "John Wick":
      switch (package) {
        case "Drink":
          price = 12;
          break;
        case "Popcorn":
          price = 15;
          break;
        case "Menu":
          price = 19;
          break;
      }
      break;
    case "Star Wars":
      switch (package) {
        case "Drink":
          price = 18;
          break;
        case "Popcorn":
          price = 25;
          break;
        case "Menu":
          price = 30;
          break;
      }
      break;
    case "Jumanji":
      switch (package) {
        case "Drink":
          price = 9;
          break;
        case "Popcorn":
          price = 11;
          break;
        case "Menu":
          price = 14;
          break;
      }
      break;
  }
  let totalPrice = price * ticketNum;
  if (projection === "Star Wars" && ticketNum >= 4) {
    totalPrice *= 0.7;
  } else if (projection === "Jumanji" && ticketNum === 2) {
    totalPrice *= 0.85;
  }

  console.log(`Your bill is ${totalPrice.toFixed(2)} leva.`);
}

filmPremiere(["Jumanji", "Menu", "2"]);

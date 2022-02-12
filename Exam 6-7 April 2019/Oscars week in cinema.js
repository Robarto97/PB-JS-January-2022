function oscarsWeek(input) {
  const movieName = input[0];
  const hallType = input[1];
  const ticketBought = Number(input[2]);

  let price = 0;
  switch (movieName) {
    case "A Star Is Born":
      switch (hallType) {
        case "normal":
          price = 7.5;
          break;
        case "luxury":
          price = 10.5;
          break;
        case "ultra luxury":
          price = 13.5;
          break;
      }
      break;
    case "Bohemian Rhapsody":
      switch (hallType) {
        case "normal":
          price = 7.35;
          break;
        case "luxury":
          price = 9.45;
          break;
        case "ultra luxury":
          price = 12.75;
          break;
      }
      break;
    case "Green Book":
      switch (hallType) {
        case "normal":
          price = 8.15;
          break;
        case "luxury":
          price = 10.25;
          break;
        case "ultra luxury":
          price = 13.25;
          break;
      }
      break;
    case "The Favourite":
      switch (hallType) {
        case "normal":
          price = 8.75;
          break;
        case "luxury":
          price = 11.55;
          break;
        case "ultra luxury":
          price = 13.95;
          break;
      }
      break;
  }
  const totalPrice = price * ticketBought;
  console.log(`${movieName} -> ${totalPrice.toFixed(2)} lv.`);
}

oscarsWeek(["The Favourite", "ultra luxury", 34]);

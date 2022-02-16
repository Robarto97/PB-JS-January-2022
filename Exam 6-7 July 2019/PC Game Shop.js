function pcGameShop(input) {
  const soldGames = Number(input[0]);
  let index = 0;
  let hearthCounter = 0;
  let fortCounter = 0;
  let overCounter = 0;
  let otherCounter = 0;

  for (let i = 0; i < soldGames; i++) {
    let game = input[++index];

    switch (game) {
      case "Hearthstone":
        hearthCounter++;
        break;
      case "Fornite":
        fortCounter++;
        break;
      case "Overwatch":
        overCounter++;
        break;
      default:
        otherCounter++;
        break;
    }
  }
  console.log(
    `Hearthstone - ${((hearthCounter / soldGames) * 100).toFixed(2)}%`
  );
  console.log(`Fornite - ${((fortCounter / soldGames) * 100).toFixed(2)}%`);
  console.log(`Overwatch - ${((overCounter / soldGames) * 100).toFixed(2)}%`);
  console.log(`Others - ${((otherCounter / soldGames) * 100).toFixed(2)}%`);
}

pcGameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);

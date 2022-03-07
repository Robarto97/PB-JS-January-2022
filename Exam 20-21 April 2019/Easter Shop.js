function easterShop(input) {
  let quantity = Number(input[0]);
  let index = 1;
  let command = input[index];
  let bought = 0;

  while (command !== "Close") {
    let action = command;
    index++;
    let eggNum = Number(input[index]);

    if (action === "Buy") {
      if (eggNum > quantity) {
        console.log(`Not enough eggs in store!`);
        console.log(`You can buy only ${quantity}.`);
        break;
      }
      bought += eggNum;
      quantity -= eggNum;
    } else if (action === "Fill") {
      quantity += eggNum;
    }

    index++;
    command = input[index];
  }
  if (command === "Close") {
    console.log(`Store is closed!`);
    console.log(`${bought} eggs sold.`);
  }
}

easterShop(["20", "Fill", "30", "Buy", "15", "Buy", "20", "Close"]);

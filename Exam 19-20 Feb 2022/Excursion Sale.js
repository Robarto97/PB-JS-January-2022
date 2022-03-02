function excursionSale(input) {
  let excursionSeaNum = Number(input[0]);
  let excursionMountainNum = Number(input[1]);
  let index = 2;
  let command = input[index];
  let profit = 0;

  while (command !== "Stop") {
    switch (command) {
      case "sea":
        if (excursionSeaNum === 0) {
          break;
        } else {
          profit += 680;
          excursionSeaNum--;
        }
        break;
      case "mountain":
        if (excursionMountainNum === 0) {
          break;
        } else {
          profit += 499;
          excursionMountainNum--;
        }
        break;
    }
    if(excursionMountainNum === 0 && excursionSeaNum === 0){
        console.log(`Good job! Everything is sold.`);
        break;
    }

    index++;
    command = input[index];
  }
  console.log(`Profit: ${profit} leva.`);
}

excursionSale(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])

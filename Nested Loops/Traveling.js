function traveling(input) {
  let destination = input[0];
  let budget = Number(input[1]);
  let savedMoney = 0;
  let index = 1;

  while (destination !== "End") {
    while (savedMoney >= 0) {
      index++;
      let money = Number(input[index]);
      savedMoney += money;
      if (savedMoney >= budget) {
        console.log(`Going to ${destination}!`);
        savedMoney = 0;
        break;
      }
    }
    index++;
    destination = input[index++];
    budget = Number(input[index]);
  }
}

traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])



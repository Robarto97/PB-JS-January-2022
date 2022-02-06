function vacation(input) {
  let index = 0;
  let neededMoney = Number(input[index++]);
  let currentMoney = Number(input[index++]);
  let action = input[index++];
  let money = Number(input[index++]);
  let daysPassed = 0;
  let spendCount = 0;
  
  while (money > 0) {
    daysPassed++;
    if (action === "spend") {
      currentMoney -= money;
      spendCount++;
    } else if (action === "save") {
      currentMoney += money;
      spendCount = 0;
    }
    if (currentMoney < 0) currentMoney = 0;

    if (spendCount == 5) {
      break;
    }
    action = input[index++];
    money = Number(input[index++]);
  }
  if (currentMoney >= neededMoney) {
    console.log(`You saved the money for ${daysPassed} days.`);
  } else {
    console.log(`You can't save the money.`);
    console.log(`${daysPassed}`);
  }
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation([
  "110",
  "60",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
  "spend",
  "10",
]);
vacation([
  "250",
  "150",
  "spend",
  "50",
  "spend",
  "50",
  "save",
  "100",
  "save",
  "100",
]);

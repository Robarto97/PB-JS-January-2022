function cleverLily(input) {
  let index = 0;
  const age = Number(input[index++]);
  const machinePrice = Number(input[index++]);
  const toyPrice = Number(input[index]);
  let money = 10;
  let savedMoney = 0;
  let toyCounter = 0;
  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      savedMoney += money;
      money += 10;
      savedMoney -= 1;
    } else {
      toyCounter++;
    }
  }
  savedMoney += toyCounter * toyPrice;
  let diff = Math.abs(savedMoney - machinePrice);
  if (savedMoney >= machinePrice) {
    console.log(`Yes! ${diff.toFixed(2)}`);
  } else console.log(`No! ${diff.toFixed(2)}`);
}

cleverLily(["10", "170.00", "6"]);

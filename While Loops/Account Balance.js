function balance(input) {
  let index = 0;
  let installment = input[index++];
  let sum = 0;
  while (installment !== "NoMoreMoney") {
    let amount = Number(installment);
    if (amount < 0) {
      console.log(`Invalid operation!`);
      break;
    }
    sum += amount;
    console.log(`Increase: ${amount.toFixed(2)}`);
    installment = input[index++];
  }
  console.log(`Total: ${sum.toFixed(2)}`);
}

balance(["5.51", "69.42", "100", "NoMoreMoney"]);
// balance(["120", "45.55", "-150"]);

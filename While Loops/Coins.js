function coins(input) {
  let money = Number(input[0]);
  let coins = [1, 2, 5, 10, 20, 50, 100, 200];
  let moneyInPennies = (money * 100).toFixed(0);
  let coinCounter = 0;

  while (moneyInPennies > 0) {
    for (let i = coins.length - 1; i >= 0; i--) {
      if (moneyInPennies >= coins[i]) {
        moneyInPennies -= coins[i];
        coinCounter++;
        if(moneyInPennies >= coins[i]){
            i++;
        }
      }
    }
  }
  console.log(coinCounter);
}

// coins([1.23]);
// coins([2]);
// coins([0.56]);
// coins([2.73]);
coins([0.59]);
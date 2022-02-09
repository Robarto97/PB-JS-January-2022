function changeBureau(input) {
  const bitcoinNum = Number(input[0]);
  const yuanNum = Number(input[1]);
  const commission = Number(input[2]);

  const bitcoinToLeva = 1168;
  const yuanToDollars = 0.15;
  const dollarToLeva = 1.76;
  const euroToLeva = 1.95;
  const totalLeva =
    bitcoinNum * bitcoinToLeva + yuanNum * yuanToDollars * dollarToLeva;
  let totalEuro = totalLeva / euroToLeva;
  totalEuro *= (100 - commission) / 100;
  console.log(totalEuro.toFixed(2));
}

changeBureau(["1", "5", "5"]);
changeBureau(["20", "5678", "2.4"]);

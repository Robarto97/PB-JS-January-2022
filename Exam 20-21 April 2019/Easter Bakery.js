function easterBakery(input) {
  const flourPricePerKg = Number(input[0]);
  const flourKg = Number(input[1]);
  const sugarKg = Number(input[2]);
  const eggsNum = Number(input[3]);
  const yeastNum = Number(input[4]);

  const sugarPricePerKg = flourPricePerKg * 0.75;
  const eggsPrice = flourPricePerKg * 1.1;
  const yeastPrice = sugarPricePerKg * 0.2;

  const totalFlourPrice = flourPricePerKg * flourKg;
  const totalSugarPrice = sugarKg * sugarPricePerKg;
  const totalEggsPrice = eggsNum * eggsPrice;
  const totalYeastPrice = yeastNum * yeastPrice;

  const finalPrice =
    totalEggsPrice + totalFlourPrice + totalSugarPrice + totalYeastPrice;

  console.log(finalPrice.toFixed(2));
}

easterBakery(["63.44",
"3.57",
"6.35",
"8",
"2"])



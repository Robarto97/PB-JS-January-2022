function easterLunch(input) {
  const easterBreadNum = Number(input[0]);
  const eggsNum = Number(input[1]);
  const cookiesNum = Number(input[2]);

  const totalEasterBreadPrice = easterBreadNum * 3.2;
  const totalEggsPrice = eggsNum * 4.35;
  const totalCookiesPrice = cookiesNum * 5.4;
  const eggPaintPrice = eggsNum * 12 * 0.15;

  const finalPrice =
    totalCookiesPrice + totalEasterBreadPrice + totalEggsPrice + eggPaintPrice;

    console.log(finalPrice.toFixed(2));
}

easterLunch(["4",
"4",
"3"])


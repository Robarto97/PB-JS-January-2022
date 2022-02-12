function godzillaKong(input) {
  const budget = Number(input[0]);
  const statistNum = Number(input[1]);
  const clothingPriceForOneStatist = Number(input[2]);

  const decor = budget * 0.1;
  let totalClothingPrice = statistNum * clothingPriceForOneStatist;
  if (statistNum > 150) {
    totalClothingPrice *= 0.9;
  }
  const totalMoviePrice = decor + totalClothingPrice;
  let diff = Math.abs(budget - totalMoviePrice);
  if (budget >= totalMoviePrice) {
    console.log("Action!");
    console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
  } else {
    console.log("Not enough money!");
    console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
  }
}

godzillaKong(["9587.88",
"222",
"55.68"])


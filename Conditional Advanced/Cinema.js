function cinema(input) {
  const type = input[0];
  const rows = Number(input[1]);
  const columns = Number(input[2]);

  const premierePrice = 12;
  const normalPrice = 7.5;
  const discountPrice = 5;

  let finalMoney = 0;

  switch (type) {
    case "Premiere":
      finalMoney = rows * columns * premierePrice;
      break;
    case "Normal":
      finalMoney = rows * columns * normalPrice;
      break;
    case "Discount":
      finalMoney = rows * columns * discountPrice;
      break;
  }
  console.log(`${finalMoney.toFixed(2)} leva`);
}

cinema(["Premiere", 10, 12]);
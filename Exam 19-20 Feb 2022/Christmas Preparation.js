function christmasPrep(input) {
  const paper = Number(input[0]);
  const cloth = Number(input[1]);
  const glueLitter = Number(input[2]);
  const discount = Number(input[3]);

  const paperPrice = 5.8;
  const clothPrice = 7.2;
  const gluePrice = 1.2;

  const price =
    paper * paperPrice + cloth * clothPrice + glueLitter * gluePrice;
  const totalPrice = (price * (100 - discount)) / 100;
  console.log(totalPrice.toFixed(3));
}

christmasPrep(["4",
"2",
"5",
"13"])



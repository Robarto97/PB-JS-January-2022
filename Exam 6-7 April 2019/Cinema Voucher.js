function cinemaVoucher(input) {
  let voucherPrice = Number(input[0]);
  let index = 1;
  let product = String(input[index]);
  let price = 0;
  let movieCounter = 0;
  let otherCounter = 0;
  while (product !== "End") {
    if (product.length > 8) {
      price = product.charCodeAt(0) + product.charCodeAt(1);
    } else {
      price = product.charCodeAt(0);
    }
    if (price > voucherPrice) {
      break;
    }
    if (product.length > 8) {
      movieCounter++;
    } else {
      otherCounter++;
    }
    voucherPrice -= price;

    index++;
    product = input[index];
  }
  console.log(movieCounter);
  console.log(otherCounter);
}

cinemaVoucher(["1500",
"Avengers: Endgame",
"Bohemian Rhapsody",
"Deadpool 2",
"End"])


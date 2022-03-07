function paintingEggs(input) {
  const size = input[0];
  const paint = input[1];
  const quantity = Number(input[2]);
  let price = 0;

  switch (size) {
    case "Large":
      switch (paint) {
        case "Red":
          price = 16;
          break;
        case "Green":
          price = 12;
          break;
        case "Yellow":
          price = 9;
          break;
      }
      break;
    case "Medium":
      switch (paint) {
        case "Red":
          price = 13;
          break;
        case "Green":
          price = 9;
          break;
        case "Yellow":
          price = 7;
          break;
      }
      break;
    case "Small":
      switch (paint) {
        case "Red":
          price = 9;
          break;
        case "Green":
          price = 8;
          break;
        case "Yellow":
          price = 5;
          break;
      }
      break;
  }
  let totalPrice = (price*quantity)*0.65;
  console.log(totalPrice.toFixed(2) + " leva.");
}

paintingEggs(["Small",
"Yellow",
"3"])


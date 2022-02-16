function travelAgency(input) {
  const city = input[0];
  const package = input[1];
  const vip = input[2];
  let daysStay = Number(input[3]);
  let price = 0;

  switch (city) {
    case "Bansko":
    case "Borovets":
      switch (package) {
        case "withEquipment":
          price = 100;
          if (vip === "yes") {
            price *= 0.9;
          }
          break;
        case "noEquipment":
          price = 80;
          if (vip === "yes") {
            price *= 0.95;
          }
          break;
        default:
          console.log(`Invalid input!`);
          break;
      }
      break;
    case "Varna":
    case "Burgas":
      switch (package) {
        case "withBreakfast":
          price = 130;
          if (vip === "yes") {
            price *= 0.88;
          }
          break;
        case "noBreakfast":
          price = 100;
          if (vip === "yes") {
            price *= 0.93;
          }
          break;
        default:
          console.log(`Invalid input!`);
          break;
      }
      break;
    default:
      console.log(`Invalid input!`);
      break;
  }

  if (daysStay > 7) {
    daysStay--;
  }
  let totalPrice = price * daysStay;
  if (daysStay < 1) {
    console.log("Days must be positive number!");
  }
  if (totalPrice > 0) {
    console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
  }
}

travelAgency(["Varna", "noBreakfast", "no", "9"]);

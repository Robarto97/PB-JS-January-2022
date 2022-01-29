function tradeCommissions(input) {
  const city = input[0];
  const sells = Number(input[1]);
  let result = "";

  if (sells >= 0 && sells <= 500) {
    switch (city) {
      case "Sofia":
        result = sells * 0.05;
        break;
      case "Varna":
        result = sells * 0.045;
        break;
      case "Plovdiv":
        result = sells * 0.055;
        break;
      default:
        break;
    }
  } else if (sells > 500 && sells <= 1000) {
    switch (city) {
      case "Sofia":
        result = sells * 0.07;
        break;
      case "Varna":
        result = sells * 0.075;
        break;
      case "Plovdiv":
        result = sells * 0.08;
        break;
      default:
        break;
    }
  } else if (sells > 1000 && sells <= 10000) {
    switch (city) {
      case "Sofia":
        result = sells * 0.08;
        break;
      case "Varna":
        result = sells * 0.1;
        break;
      case "Plovdiv":
        result = sells * 0.12;
        break;
      default:
        break;
    }
  } else if (sells > 10000) {
    switch (city) {
      case "Sofia":
        result = sells * 0.12;
        break;
      case "Varna":
        result = sells * 0.13;
        break;
      case "Plovdiv":
        result = sells * 0.145;
        break;
      default:
        break;
    }
  }
  if (result > 0) console.log(Number(result).toFixed(2));
  else console.log("error");
}

tradeCommissions(["Varna", "200"]);

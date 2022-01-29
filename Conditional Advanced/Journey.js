function journey(input) {
  const budget = Number(input[0]);
  const season = input[1];
  let destination = "";
  let finalMoney = 0;
  let holiday = "";

  switch (season) {
    case "summer":
      if (budget <= 100) {
        finalMoney = budget * 0.3;
        destination = "Bulgaria";
      } else if (budget > 100 && budget <= 1000) {
        finalMoney = budget * 0.4;
        destination = "Balkans";
      } else {
        finalMoney = budget * 0.9;
        destination = "Europe";
      }
      break;
    case "winter":
      if (budget <= 100) {
        finalMoney = budget * 0.7;
        destination = "Bulgaria";
      } else if (budget > 100 && budget <= 1000) {
        finalMoney = budget * 0.8;
        destination = "Balkans";
      } else {
        finalMoney = budget * 0.9;
        destination = "Europe";
      }
      break;
  }
  if (season === "summer" && destination !== "Europe") {
    holiday = "Camp";
  } else holiday = "Hotel";
  console.log(`Somewhere in ${destination}`);
  console.log(`${holiday} - ${finalMoney.toFixed(2)}`);
}

journey(["1500", "summer"])






function schoolCamp(input) {
  const season = input[0];
  const group = input[1];
  const studentNumber = Number(input[2]);
  const nights = Number(input[3]);

  const winterGroupPrice = 9.6;
  const springGroupPrice = 7.2;
  const summerGroupPrice = 15;
  const winterMixedPrice = 10;
  const springMixedPrice = 9.5;
  const summerMixedPrice = 20;
  let sport = "";
  let price = studentNumber * nights;

  switch (season) {
    case "Winter":
      if (group === "boys" || group === "girls") {
        price *= winterGroupPrice;
        if (group === "boys") {
          sport = "Judo";
        } else if (group === "girls") {
          sport = "Gymnastics";
        }
      } else if (group === "mixed") {
        price *= winterMixedPrice;
        sport = "Ski";
      }
      break;

    case "Spring":
      if (group === "boys" || group === "girls") {
        price *= springGroupPrice;
        if (group === "boys") {
          sport = "Tennis";
        } else if (group === "girls") {
          sport = "Athletics";
        }
      } else if (group === "mixed") {
        price *= springMixedPrice;
        sport = "Cycling";
      }
      break;

    case "Summer":
      if (group === "boys" || group === "girls") {
        price *= summerGroupPrice;
        if (group === "boys") {
          sport = "Football";
        } else if (group === "girls") {
          sport = "Volleyball";
        }
      } else if (group === "mixed") {
        price *= summerMixedPrice;
        sport = "Swimming";
      }
      break;
  }
  if (studentNumber >= 50) {
    price *= 0.5;
  } else if (studentNumber >= 20 && studentNumber < 50) {
    price *= 0.85;
  } else if (studentNumber >= 10 && studentNumber < 20) {
    price *= 0.95;
  }

  console.log(`${sport} ${price.toFixed(2)} lv.`);
}
schoolCamp(["Winter", "mixed", 9, 15]);

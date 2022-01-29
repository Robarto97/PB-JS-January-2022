function skiTrip(input) {
  const daysStay = Number(input[0]);
  const typeRoom = input[1];
  const rating = input[2];

  const roomForOnePersonPrice = 18;
  const apartmentPrice = 25;
  const presidentApartmentPrice = 35;
  const nightsStay = daysStay - 1;
  let totalPrice = 0;

  if (typeRoom === "room for one person") {
    totalPrice = nightsStay * roomForOnePersonPrice;
  } else if (typeRoom === "apartment") {
    totalPrice = nightsStay * apartmentPrice;
    if (daysStay < 10) {
      totalPrice *= 0.7;
    } else if (daysStay >= 10 && daysStay <= 15) {
      totalPrice *= 0.65;
    } else totalPrice *= 0.5;
  } else if (typeRoom === "president apartment") {
    totalPrice = nightsStay * presidentApartmentPrice;
    if (daysStay < 10) {
      totalPrice *= 0.9;
    } else if (daysStay >= 10 && daysStay <= 15) {
      totalPrice *= 0.85;
    } else totalPrice *= 0.8;
  }

  if (rating === "positive") {
    totalPrice *= 1.25;
  } else totalPrice *= 0.9;
  console.log(`${totalPrice.toFixed(2)}`);
}

skiTrip(["30",
"president apartment",
"negative"])


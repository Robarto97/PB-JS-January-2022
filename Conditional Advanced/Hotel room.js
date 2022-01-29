function hotelRoom(input) {
  const month = input[0];
  const nights = Number(input[1]);

  const studioMayOctoberNight = 50;
  const studioJuneSeptNight = 75.2;
  const studioJulyAugustNight = 76;
  const aptMayOctoberNight = 65;
  const aptJuneSeptNight = 68.7;
  const aptJulyAugustNight = 77;
  let totalStudioPrice = 0;
  let totalAptPrice = 0;

  switch (month) {
    case "May":
    case "October":
      totalStudioPrice = nights * studioMayOctoberNight;
      totalAptPrice = nights * aptMayOctoberNight;

      if (nights > 7 && nights < 14) {
        totalStudioPrice *= 0.95;
      } else if (nights > 14) {
        totalStudioPrice *= 0.7;
      }
      break;
    case "June":
    case "September":
      totalStudioPrice = nights * studioJuneSeptNight;
      totalAptPrice = nights * aptJuneSeptNight;
      if (nights > 14) {
        totalStudioPrice *= 0.8;
      }
      break;
    case "July":
    case "August":
      totalStudioPrice = nights * studioJulyAugustNight;
      totalAptPrice = nights * aptJulyAugustNight;
      break;
  }

  if (nights > 14) {
    totalAptPrice *= 0.9;
  }
  console.log(`Apartment: ${totalAptPrice.toFixed(2)} lv.`);
  console.log(`Studio: ${totalStudioPrice.toFixed(2)} lv.`);
}

hotelRoom(["August", "20"]);

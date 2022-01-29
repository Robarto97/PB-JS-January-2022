function bikeRace(input) {
  const juniors = Number(input[0]);
  const seniors = Number(input[1]);
  const track = input[2];

  const juniorTrailPrice = 5.5;
  const juniorCrossPrice = 8;
  const juniorDownhillPrice = 12.25;
  const juniorRoadPrice = 20;
  const seniorTrailPrice = 7;
  const seniorCrossPrice = 9.5;
  const seniorDownhillPrice = 13.75;
  const seniorRoadPrice = 21.5;
  let totalPrice = 0;
  const people = juniors + seniors;

  switch (track) {
    case "trail":
      totalPrice = juniors * juniorTrailPrice + seniors * seniorTrailPrice;
      break;
    case "cross-country":
      totalPrice = juniors * juniorCrossPrice + seniors * seniorCrossPrice;
      if (people >=50){
          totalPrice *= 0.75;
      }
      break;
    case "downhill":
      totalPrice =
        juniors * juniorDownhillPrice + seniors * seniorDownhillPrice;
      break;
    case "road":
      totalPrice = juniors * juniorRoadPrice + seniors * seniorRoadPrice;
      break;
  }
  const finalPriceNoCosts = totalPrice * 0.95;
  console.log(finalPriceNoCosts.toFixed(2));
}

bikeRace([30, 25, "cross-country"]);

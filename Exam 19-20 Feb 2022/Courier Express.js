function courierExpress(input) {
  const weight = Number(input[0]);
  const service = input[1];
  const distance = Number(input[2]);
  let priceDistance = 0;

  if (weight < 1) {
    priceDistance = 0.03;
  } else if (weight >= 1 && weight < 10) {
    priceDistance = 0.05;
  } else if (weight >= 10 && weight < 40) {
    priceDistance = 0.1;
  } else if (weight >= 40 && weight < 90) {
    priceDistance = 0.15;
  } else if (weight >= 90 && weight < 150) {
    priceDistance = 0.2;
  }
  let priceKg = 0;
  let totalpriceKg = 0;

  if (service === "express") {
    if (weight < 1) {
        priceKg = 0.8 * priceDistance;
    } else if (weight >= 1 && weight < 10) {
        priceKg = 0.4 * priceDistance;
    } else if (weight >= 10 && weight < 40) {
        priceKg = 0.05 * priceDistance;
    } else if (weight >= 40 && weight < 90) {
      priceKg = 0.02 * priceDistance;
    } else if (weight >= 90 && weight < 150) {
        priceKg = 0.01 * priceDistance;
    }
    totalpriceKg = weight * priceKg * distance;
  }

  let price = priceDistance * distance + totalpriceKg;
  console.log(
    `The delivery of your shipment with weight of ${weight.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`
  );
}

courierExpress(["20",
"standard",
"349"])


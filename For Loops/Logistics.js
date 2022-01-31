function logistics(input) {
  let index = 0;
  const cargoCount = Number(input[index++]);
  let totalTons = 0;
  let busCounter = 0;
  let truckCounter = 0;
  let trainCounter = 0;
  let busPrice = 200;
  let truckPrice = 175;
  let trainPrice = 120;

  for (let i = 0; i < cargoCount; i++) {
    let cargoTons = Number(input[index++]);
    totalTons += cargoTons;
    if (cargoTons <= 3) {
      busCounter += cargoTons;
    } else if (cargoTons >= 4 && cargoTons <= 11) {
      truckCounter += cargoTons;
    } else if (cargoTons >= 12) {
      trainCounter += cargoTons;
    }
  }

  let totalPrice =
    busCounter * busPrice +
    truckCounter * truckPrice +
    trainCounter * trainPrice;
  let avgPrice = totalPrice / totalTons;

  let busP = (busCounter / totalTons) * 100;
  let truckP = (truckCounter / totalTons) * 100;
  let trainP = (trainCounter / totalTons) * 100;

  console.log(avgPrice.toFixed(2));
  console.log(
    `${busP.toFixed(2)}%\n${truckP.toFixed(2)}%\n${trainP.toFixed(2)}%\n`
  );
}

logistics([5, 2, 10, 20, 1, 7]);

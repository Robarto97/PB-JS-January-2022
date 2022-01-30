function trekkingMania(input) {
  let index = 0;
  const groupCount = Number(input[index++]);
  let totalCount = 0;
  let musalaCounter = 0;
  let monblanCounter = 0;
  let kiliCounter = 0;
  let k2Counter = 0;
  let everestCounter = 0;
  for (let i = 0; i < groupCount; i++) {
    let num = Number(input[index++]);
    totalCount += num;
    if (num <= 5) {
      musalaCounter += num;
    } else if (num >= 6 && num <= 12) {
      monblanCounter += num;
    } else if (num >= 13 && num <= 25) {
      kiliCounter += num;
    } else if (num >= 26 && num <= 40) {
      k2Counter += num;
    } else if (num >= 41) {
      everestCounter += num;
    }
  }

  let musalaP = (musalaCounter / totalCount) * 100;
  let monblanP = (monblanCounter / totalCount) * 100;
  let kiliP = (kiliCounter / totalCount) * 100;
  let k2P = (k2Counter / totalCount) * 100;
  let everestP = (everestCounter / totalCount) * 100;
  console.log(
    `${musalaP.toFixed(2)}%\n${monblanP.toFixed(2)}%\n${kiliP.toFixed(
      2
    )}%\n${k2P.toFixed(2)}%\n${everestP.toFixed(2)}%\n`
  );
}

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])


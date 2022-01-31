function footballLeague(input) {
  let index = 0;
  const capacity = Number(input[index++]);
  const fansCount = Number(input[index++]);
  let counterA = 0;
  let counterB = 0;
  let counterV = 0;
  let counterG = 0;
  for (let i = 0; i < fansCount; i++) {
    let sector = input[index++];
    switch (sector) {
      case "A":
        counterA++;
        break;
      case "B":
        counterB++;
        break;
      case "V":
        counterV++;
        break;
      case "G":
        counterG++;
        break;
    }
  }
  let sectorAP = (counterA / fansCount) * 100;
  let sectorBP = (counterB / fansCount) * 100;
  let sectorVP = (counterV / fansCount) * 100;
  let sectorGP = (counterG / fansCount) * 100;
  let totalP = (fansCount / capacity) * 100;
  console.log(
    `${sectorAP.toFixed(2)}%\n${sectorBP.toFixed(2)}%\n${sectorVP.toFixed(
      2
    )}%\n${sectorGP.toFixed(2)}%\n${totalP.toFixed(2)}%\n`
  );
}

footballLeague([76, 10, "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);

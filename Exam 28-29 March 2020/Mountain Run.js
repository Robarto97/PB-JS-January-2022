function mountainRun(input) {
  const record = Number(input[0]);
  const distance = Number(input[1]);
  const secondsForMeter = Number(input[2]);

  let totalTime = distance * secondsForMeter;
  totalTime += Math.floor((distance / 50)) * 30;
  let diff = Math.abs(totalTime - record);
  if (record <= totalTime) {
    console.log(`No! He was ${diff.toFixed(2)} seconds slower.`);
  } else
    console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
}

// mountainRun(["10164", "1400", "25"]);
// mountainRun(["5554.36", "1340", "3.23"]);
mountainRun(["1377", "389", "3"]);

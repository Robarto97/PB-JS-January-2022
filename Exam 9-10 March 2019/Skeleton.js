function skeleton(input) {
  const minutesControl = Number(input[0]);
  const secondsCOntrol = Number(input[1]);
  const length = Number(input[2]);
  const seconds100m = Number(input[3]);

  const controlTime = minutesControl * 60 + secondsCOntrol;
  const reduction = length / 120;
  const totalReducedTime = reduction * 2.5;
  const totalTimeMarin = (length / 100) * seconds100m - totalReducedTime;
  if (totalTimeMarin <= controlTime) {
    console.log(`Marin Bangiev won an Olympic quota!`);
    console.log(`His time is ${totalTimeMarin.toFixed(3)}.`);
  } else {
    console.log(
      `No, Marin failed! He was ${(totalTimeMarin - controlTime).toFixed(
        3
      )} second slower.`
    );
  }
}

skeleton(["1",
"20",
"1546",
"12"])

function footballResults(input) {
  const r1 = input[0];
  const r2 = input[1];
  const r3 = input[2];
  let wins = 0;
  let loses = 0;
  let draws = 0;

  if (r1[0] > r1[2]) {
    wins++;
  } else if (r1[0] === r1[2]) {
    draws++;
  } else {
    loses++;
  }
  if (r2[0] > r2[2]) {
    wins++;
  } else if (r2[0] === r2[2]) {
    draws++;
  } else {
    loses++;
  }
  if (r3[0] > r3[2]) {
    wins++;
  } else if (r3[0] === r3[2]) {
    draws++;
  } else {
    loses++;
  }
  console.log(`Team won ${wins} games.`);
  console.log(`Team lost ${loses} games.`);
  console.log(`Drawn games: ${draws}`);
}

footballResults(["4:2", "0:3", "1:0"]);

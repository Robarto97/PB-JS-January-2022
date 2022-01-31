function backToThePast(input) {
  let index = 0;
  let inheritance = Number(input[index++]);
  const year = Number(input[index++]);
  let age = 18;
  for (let i = 0; i <= year - 1800; i++) {
    if (i === 0 || i % 2 === 0) {
      inheritance -= 12000;
      age++;
    } else {
      inheritance -= 12000 + 50 * age;
      age++;
    }
  }
  if (inheritance >= 0) {
    console.log(
      `Yes! He will live a carefree life and will have ${inheritance.toFixed(2)} dollars left.`
    );
  } else console.log(`He will need ${Math.abs(inheritance).toFixed(2)} dollars to survive.`);
}

backToThePast([100000.15, 1808]);

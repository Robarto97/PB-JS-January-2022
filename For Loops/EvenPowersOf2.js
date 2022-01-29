function evenPower(input) {
  const n = Number(input[0]);
  for (let i = 0; i <= n; i++) {
    if (i == 0 || i % 2 == 0) {
      console.log(Math.pow(2, i));
    }
  }
}

evenPower([7]);

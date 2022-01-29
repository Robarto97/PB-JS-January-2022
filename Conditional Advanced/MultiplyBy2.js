function multiplier(input) {
  let num = 0;
  let n = 0;
  while (num >= 0) {
    num = Number(input[n]);
    if (num >= 0) {
      num *= 2;
      console.log(`Result: ${num.toFixed(2)}`);
    } else {
      console.log("Negative number!"); break;
    }
    n++;
  }
}

multiplier([12, 43.2144, 12.3, 543.23, -20]);

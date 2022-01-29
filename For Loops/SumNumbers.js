function sumNumbers(input) {
  const n = input[0];
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += Number(n.charAt(i));
  }
  console.log(`The sum of the digits is:${sum}`);
}

sumNumbers(["564891"]);

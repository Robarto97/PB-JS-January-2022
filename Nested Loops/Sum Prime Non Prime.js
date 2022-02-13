function sumPrimeNonPrime(input) {
  let index = 0;
  let command = input[index];
  let sumPrime = 0;
  let sumNonPrime = 0;

  while (command !== "stop") {
    let isPrime = true;
    let number = Number(command);
    if (number < 0) {
      console.log("Number is negative.");
      index++;
      command = input[index];
      continue;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      sumPrime += number;
    } else {
      sumNonPrime += number;
    }
    index++;
    command = input[index];
  }
  console.log(`Sum of all prime numbers is: ${sumPrime}`);
  console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

sumPrimeNonPrime(["0", "-9", "0", "stop"]);

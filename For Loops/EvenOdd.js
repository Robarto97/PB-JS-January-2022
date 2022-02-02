function evenOdd(input) {
  let index = 0;
  const numCounter = Number(input[index++]);
  let oddSum = 0;
  let evenSum = 0;
  let oddMin = 100;
  let evenMin = 100;
  let oddMax = -100;
  let evenMax = -100;
  let evenCounter = 0;
  let oddCounter = 0;
  for (let i = 1; i <= numCounter; i++) {
    let num = Number(input[index++]);
    if (i % 2 === 0) {
      evenSum += num;
      evenCounter++;
      if (num > evenMax) {
        evenMax = num;
      }
      if (num < evenMin) {
        evenMin = num;
      }
    } else {
      oddSum += num;
      oddCounter++;
      if (num > oddMax) {
        oddMax = num;
      }
      if (num < oddMin) {
        oddMin = num;
      }
    }
  }
  console.log(`OddSum=${oddSum.toFixed(2)},`);

  if (oddCounter == 0) {
    console.log(`OddMin=No,`);
    console.log(`OddMax=No,`);
  } else {
    console.log(`OddMin=${oddMin.toFixed(2)},`);
    console.log(`OddMax=${oddMax.toFixed(2)},`);
  }

  console.log(`EvenSum=${evenSum.toFixed(2)},`);

  if (evenCounter == 0) {
    console.log(`EvenMin=No,`);
    console.log(`EvenMax=No`);
  } else {
    console.log(`EvenMin=${evenMin.toFixed(2)},`);
    console.log(`EvenMax=${evenMax.toFixed(2)}`);
  }
}

evenOdd([6, 2, 3, 5, 4, 2, 1]);
// evenOdd([5, 3, -2, 8, 11, -3]);

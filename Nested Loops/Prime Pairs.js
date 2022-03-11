function primePairs(input) {
  const startFirstPair = Number(input[0]);
  const startSecondPair = Number(input[1]);
  const endFirstPairDiff = Number(input[2]);
  const endSecondPairDiff = Number(input[3]);

  const endFirstPair = startFirstPair + endFirstPairDiff;
  const endSecondPair = startSecondPair + endSecondPairDiff;

  for (let first = startFirstPair; first <= endFirstPair; first++) {
    let isFirstPrime = true;
    for (let second = startSecondPair; second <= endSecondPair; second++) {
      let isSecondPrime = true;
      for (let i = 2; i < first; i++) {
        if (first % i === 0) {
          isFirstPrime = false;
          break;
        }
      }
      for (let j = 2; j < second; j++) {
        if (second % j === 0) {
          isSecondPrime = false;
          break;
        }
      }
      if(isFirstPrime && isSecondPrime){
          console.log(`${first}${second}`);
      }
    }
  }
}

primePairs([10, 30, 9, 6]);

function equalPairs(input) {
  let index = 0;
  const pairsCount = Number(input[index++]);
  let min = 100;
  let max = -100;
  let max0 = 0;
  let min0 = 0;

  for (let i = 0; i < pairsCount; i++) {
    let pair1 = Number(input[index++]);
    let pair2 = Number(input[index++]);
    let pairValue = pair1 + pair2;

    if (pairValue > max) {
      max = pairValue;
    } else if (pairValue < max) {
      max0 = pairValue;
    }

    if (pairValue < min) {
      min = pairValue;
    } else if (pairValue > min) {
      min0 = pairValue;
    }
  }
  let diff = Math.abs(min - max);
  let diff0 = Math.abs(min0 - max0);
  if (max === min) {
    console.log(`Yes, value=${max}`);
  } else {
    if (diff > diff0 && pairsCount > 3) {
      console.log(`No, maxdiff=${diff0}`);
    } else {
      console.log(`No, maxdiff=${diff}`);
    }
  }
}

// equalPairs([3, 1, 2, 0, 3, 4, -1]);
// equalPairs([2, 1, 2, 2, 2]);
// equalPairs([4, 1, 1, 3, 1, 2, 2, 0, 0]);
// equalPairs([1, 5, 5]);
// equalPairs([2, -1, 0, 0, -1]);
// equalPairs([2, -1, 2, 0, -1]);
equalPairs([7, 34, -33, 52, 12, -32, 32, 23, 41, 7, 25, 34, 23, 124, 21]);

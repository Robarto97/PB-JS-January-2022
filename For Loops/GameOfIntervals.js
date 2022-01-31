function gameOfIntervals(input) {
  let index = 0;
  const turns = Number(input[index++]);
  let result = 0;
  let totalCount = 0;
  let counter09 = 0;
  let counter1019 = 0;
  let counter2029 = 0;
  let counter3039 = 0;
  let counter4050 = 0;
  let counterInvalid = 0;
  for (let i = 0; i < turns; i++) {
    let numbers = Number(input[index++]);
    totalCount++;
    if (numbers >= 0 && numbers <= 9) {
      result += numbers * 0.2;
      counter09++;
    } else if (numbers >= 10 && numbers <= 19) {
      result += numbers * 0.3;
      counter1019++;
    } else if (numbers >= 20 && numbers <= 29) {
      result += numbers * 0.4;
      counter2029++;
    } else if (numbers >= 30 && numbers <= 39) {
      result += 50;
      counter3039++;
    } else if (numbers >= 40 && numbers <= 50) {
      result += 100;
      counter4050++;
    } else if (numbers < 0 || numbers > 50) {
      result /= 2;
      counterInvalid++;
    }
  }
  let p09 = counter09/totalCount*100;
  let p1019 = counter1019/totalCount*100;
  let p2029 = counter2029/totalCount*100;
  let p3039 = counter3039/totalCount*100;
  let p4050 = counter4050/totalCount*100;
  let pInvalid = counterInvalid/totalCount*100;
  console.log(result.toFixed(2));
  console.log(`From 0 to 9: ${p09.toFixed(2)}%`);
  console.log(`From 10 to 19: ${p1019.toFixed(2)}%`);
  console.log(`From 20 to 29: ${p2029.toFixed(2)}%`);
  console.log(`From 30 to 39: ${p3039.toFixed(2)}%`);
  console.log(`From 40 to 50: ${p4050.toFixed(2)}%`);
  console.log(`Invalid numbers: ${pInvalid.toFixed(2)}%`);
}

gameOfIntervals([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20]);

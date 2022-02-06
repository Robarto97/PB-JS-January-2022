function reportSystem(input) {
  let expectedSum = Number(input[0]);
  let index = 1;
  let command = input[index];
  let gatheredSum = 0;
  let cashCounter = 0;
  let cardCounter = 0;
  let cashAmount = 0;
  let cardAmount = 0;

  while (command !== "End") {
    if (gatheredSum >= expectedSum) {
      break;
    }
    let sum = Number(command);
    if (index % 2 !== 0) {
      if (sum > 100) {
        console.log("Error in transaction!");
      } else {
        console.log("Product sold!");
        cashCounter++;
        cashAmount += sum;
        gatheredSum += sum;
      }
    } else {
      if (sum < 10) {
        console.log("Error in transaction!");
      } else {
        console.log("Product sold!");
        cardCounter++;
        cardAmount += sum;
        gatheredSum += sum;
      }
    }

    index++;
    command = input[index];
  }
  if (gatheredSum >= expectedSum) {
    let avgCS = cashAmount / cashCounter;
    let avgCC = cardAmount / cardCounter;
    console.log(`Average CS: ${avgCS.toFixed(2)}`);
    console.log(`Average CC: ${avgCC.toFixed(2)}`);
  }
  if (command === "End") {
    console.log("Failed to collect required money for charity.");
  }
}

// reportSystem([500, 120, 8, 63, 256, 78, 317]);
reportSystem([600, 86, 150, 98, 227, "End"]);

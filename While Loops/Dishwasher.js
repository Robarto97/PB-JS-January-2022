function diswasher(input) {
  const bottles = Number(input[0]);
  let totalDetergent = bottles * 750;
  let index = 1;
  let command = input[index];
  let dishCounter = 0;
  let potCounter = 0;

  while (command !== "End") {
    let vessel = Number(command);
    if (totalDetergent < 0) {
      break;
    }
    if (index % 3 === 0) {
      totalDetergent -= vessel * 15;
      potCounter += vessel;
    } else {
      totalDetergent -= vessel * 5;
      dishCounter += vessel;
    }

    index++;
    command = input[index];
  }
  if (totalDetergent < 0) {
    console.log(
      `Not enough detergent, ${Math.abs(totalDetergent)} ml. more necessary!`
    );
  } else {
    console.log("Detergent was enough!");
    console.log(`${dishCounter} dishes and ${potCounter} pots were washed.`);
    console.log(`Leftover detergent ${totalDetergent} ml.`);
  }
}

// diswasher([2, 53, 65, 55, "End"]);
diswasher([1, 10, 15, 10, 12, 13, 30]);

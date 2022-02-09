function suitcasesLoad(input) {
  let index = 0;
  let capacity = Number(input[index++]);
  let command = input[index];
  let suitcasesCount = 0;

  while (command !== "End") {
    let volume = Number(command);
    suitcasesCount++;
    if (suitcasesCount % 3 === 0) {
      volume *= 1.1;
    }
    if (capacity < volume) {
      suitcasesCount--;
      console.log("No more space!");
      break;
    }
    capacity -= volume;

    index++;
    command = input[index];
  }

  if (command === "End") {
    console.log("Congratulations! All suitcases are loaded!");
  }
  console.log(`Statistic: ${suitcasesCount} suitcases loaded.`);
}
suitcasesLoad(["550", "100", "252", "72", "End"]);
suitcasesLoad(["700.5", "180", "340.6", "126", "220"]);
suitcasesLoad(["1200.2", "260", "380.5", "125.6", "305", "End"]);

function cinemaTickets(input) {
  let index = 0;
  let command = input[index];
  let kidCounter = 0;
  let studentCounter = 0;
  let standardCounter = 0;
  while (command !== "Finish") {
    let movieName = command;

    index++;
    let totalSpace = Number(input[index++]);
    let freeSpace = totalSpace;
    let ticket = input[index];
    while (ticket !== "End") {
      switch (ticket) {
        case "student":
          studentCounter++;
          break;
        case "standard":
          standardCounter++;
          break;
        case "kid":
          kidCounter++;
          break;
      }
      freeSpace--;
      if (freeSpace === 0) {
        break;
      }
      index++;
      ticket = input[index];
    }
    let busySpace = totalSpace - freeSpace;
    let percentageFull = (busySpace / totalSpace) * 100;
    console.log(`${movieName} - ${percentageFull.toFixed(2)}% full.`);
    index++;
    command = input[index];
  }
  let totalTickets = standardCounter + kidCounter + studentCounter;
  let kidPercent = kidCounter/totalTickets*100;
  let studentPercent = studentCounter/totalTickets*100;
  let standardPercent = standardCounter/totalTickets*100;
  console.log(`Total tickets: ${totalTickets}`);
  console.log(`${studentPercent.toFixed(2)}% student tickets.`);
  console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
  console.log(`${kidPercent.toFixed(2)}% kids tickets.`);
}

cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])


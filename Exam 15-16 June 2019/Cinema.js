function cinema(input) {
  let capacity = Number(input[0]);
  let index = 1;
  let command = input[index];
  let income = 0;

  while (command !== "Movie time!") {
    let people = Number(command);
    if (people > capacity) {
        capacity -=people;
      break;
    }
    capacity -= people;
    if (people % 3 === 0) {
      income += people * 5 - 5;
    } else {
      income += people * 5;
    }

    index++;
    command = input[index];
  }

  if (command === "Movie time!") {
    console.log(`There are ${capacity} seats left in the cinema.`);
  } else if (capacity <= 0) {
    console.log(`The cinema is full.`);
  }
  console.log(`Cinema income - ${income} lv.`);
}

cinema(["100",
"15",
"15",
"15",
"15",
"15",
"15",
"15"])

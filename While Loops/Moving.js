function moving(input) {
  let index = 0;
  const width = Number(input[index++]);
  const length = Number(input[index++]);
  const height = Number(input[index++]);
  let space = width * length * height;
  let command = input[index++];
  let boxSpace = 0;
  let isThereSpace = true;

  while (command !== "Done") {
    let box = Number(command);
    boxSpace += box;
    if (space < boxSpace) {
      isThereSpace = false;
      break;
    }
    command = input[index++];
  }

  let diff = Math.abs(space - boxSpace);

  if (!isThereSpace) {
    console.log(`No more free space! You need ${diff} Cubic meters more.`);
  } else {
    console.log(`${diff} Cubic meters left.`);
  }
}

moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);

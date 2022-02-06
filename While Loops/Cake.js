function cake(input) {
  let index = 0;
  const width = Number(input[index++]);
  const length = Number(input[index++]);
  let total = width * length;
  let command = input[index++];

  while (command !== "STOP") {
    let piece = Number(command);
    total -= piece;
    if (total < 0) {
      break;
    }
    command = input[index++];
  }

  if (total < 0) {
    total = Math.abs(total);
    console.log(`No more cake left! You need ${total} pieces more.`);
  } else console.log(`${total} pieces are left.`);
}

cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);

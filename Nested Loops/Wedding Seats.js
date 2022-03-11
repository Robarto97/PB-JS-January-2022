function weddingSeats(input) {
  const lastSector = String(input[0]);
  let rows = Number(input[1]);
  let oddRowSpace = Number(input[2]);
  let evenSpace = oddRowSpace + 2;
  let spaceCount = 0;

  for (let i = 65; i <= lastSector.charCodeAt(); i++) {
    for (let j = 1; j <= rows; j++) {
      if (j % 2 !== 0) {
        for (let k = 97; k < 97 + oddRowSpace; k++) {
          let line = `${String.fromCharCode(i)}${j}${String.fromCharCode(k)}`;
          spaceCount++;
          console.log(line);
        }
      } else {
        for (let k = 97; k < 97 + evenSpace; k++) {
          let line = `${String.fromCharCode(i)}${j}${String.fromCharCode(k)}`;
          spaceCount++;
          console.log(line);
        }
      }
    }
    rows++;
  }
  console.log(spaceCount);
}

weddingSeats(["C", 4, 2]);

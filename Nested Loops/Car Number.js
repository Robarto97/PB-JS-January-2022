function carNumber(input) {
  const start = Number(input[0]);
  const end = Number(input[1]);
  let line = "";

  for (let i = 1111; i <= 9999; i++) {
    let number = "" + i;
    let first = Number(number[0]);
    let second = Number(number[1]);
    let third = Number(number[2]);
    let forth = Number(number[3]);

    if (
      first >= start &&
      first <= end &&
      second >= start &&
      second <= end &&
      third >= start &&
      third <= end &&
      forth >= start &&
      forth <= end
    ) {
      if (first > forth) {
        if ((second + third) % 2 === 0) {
          if (first % 2 === 0) {
            if (forth % 2 !== 0) {
              line += Number(number) + " ";
            }
          } else if (first % 2 !== 0) {
            if (forth % 2 === 0) {
              line += Number(number) + " ";
            }
          }
        }
      }
    }
  }
  console.log(line);
}

carNumber([5, 8]);

function carNumber(input) {
  const start = Number(input[0]);
  const end = Number(input[1]);
  let line = "";

  for (let i = 3222; i <= 9999; i++) {
    let number = "" + i;
    let firstDiggit = Number(number[0]);
    let secondDiggit = Number(number[1]);
    let thirdDiggit = Number(number[2]);
    let forthDiggit = Number(number[3]);
    for (let j = 0; j < 4; j++) {
      if (Number(number[j]) >= start && Number(number[j]) <= end) {
        if (firstDiggit > forthDiggit) {
          if ((secondDiggit + thirdDiggit) % 2 === 0) {
            if (firstDiggit % 2 === 0) {
              if (forthDiggit % 2 !== 0) {
                line += Number(number[j]) + " ";
              }
            } else if (firstDiggit % 2 !== 0) {
              if (forthDiggit % 2 === 0) {
                line += Number(number[j]) + " ";
              }
            }
          }
        }
      }
    }
  }
  console.log(line);
}

carNumber([2, 3]);

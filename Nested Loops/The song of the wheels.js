function songOfWheels(input) {
  const M = Number(input[0]);
  let line = "";
  let counter = 0;
  let pass = "";

  for (let a = 1; a <= 9; a++) {
    for (let b = 1; b <= 9; b++) {
      for (let c = 1; c <= 9; c++) {
        for (let d = 1; d <= 9; d++) {
          let sum = a * b + c * d;
          if (a < b && c > d) {
            if (sum === M) {
              line += `${a}${b}${c}${d} `;
              if (counter < 4) {
                counter++;
                if (counter === 4) {
                  pass = `${a}${b}${c}${d}`;
                }
              }
            }
          }
        }
      }
    }
  }
  if (line !== "") {
    console.log(line);
  }

  if (counter < 4) {
    console.log(`No!`);
  } else if (counter === 4) console.log(`Password: ${pass}`);
}

songOfWheels([55]);

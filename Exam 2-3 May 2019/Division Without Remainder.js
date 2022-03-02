function division(input) {
  const numbers = Number(input[0]);
  let index = 0;
  let p1Counter = 0;
  let p2Counter = 0;
  let p3Counter = 0;
  for (let i = 0; i < numbers; i++) {
    index++;
    let num = Number(input[index]);

    if (num % 2 === 0) {
      p1Counter++;
    }
    if (num % 3 === 0) {
      p2Counter++;
    }
    if (num % 4 === 0) {
      p3Counter++;
    }
  }

  let p1 = (p1Counter / numbers) * 100;
  let p2 = (p2Counter / numbers) * 100;
  let p3 = (p3Counter / numbers) * 100;
  console.log(p1.toFixed(2)+"%");
  console.log(p2.toFixed(2)+"%");
  console.log(p3.toFixed(2)+"%");
}
division(["3",
"3",
"6",
"9"])


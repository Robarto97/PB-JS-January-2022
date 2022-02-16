function renovation(input) {
  const height = Number(input[0]);
  const width = Number(input[1]);
  const spaceNotToPaint = Number(input[2]);

  let space = height * width * 4;
  let spaceToPaint = Math.round(space * (1 - spaceNotToPaint / 100));
  let index = 3;
  let command = input[index];

  while (command !== "Tired!") {
    let litterPaint = Number(command);
    spaceToPaint -= litterPaint;

    if (spaceToPaint === 0) {
      console.log("All walls are painted! Great job, Pesho!");
      break;
    }
    if (spaceToPaint < 0) {
      console.log(
        `All walls are painted and you have ${Math.abs(
          spaceToPaint
        )} l paint left!`
      );
      break;
    }
    index++;
    command = input[index];
  }

  if (command === "Tired!") {
    console.log(`${spaceToPaint} quadratic m left.`);
  }
}

// renovation(["2", "3", "25", "6", "7", "5"]);
renovation(["3", "5", "10", "2", "3", "4", "Tired!"]);
// renovation(["2", "3", "25", "6", "7", "8"]);

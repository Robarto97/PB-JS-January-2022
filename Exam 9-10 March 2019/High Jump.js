function highJump(input) {
  const goal = Number(input[0]);
  let index = 1;
  let jump = Number(input[index]);
  let starter = goal - 30;
  let failed = 0;
  let jumpCounter = 0;

  while (jump >= 100 && jump <= 300) {
    if (jump > starter) {
      if (starter !== goal) {
        starter += 5;
      }
      failed = 0;
    } else {
      failed++;
    }
    jumpCounter++;
    if (failed === 3) {
      console.log(`Tihomir failed at ${starter}cm after ${jumpCounter} jumps.`);
      break;
    }
    if (jump > goal) {
      console.log(
        `Tihomir succeeded, he jumped over ${starter}cm after ${jumpCounter} jumps.`
      );
      break;
    }
    index++;
    jump = Number(input[index]);
  }
}

highJump(["250", "225", "224", "225", "228", "231", "235", "234", "235"]);
highJump(["231", "205", "212", "213", "228", "229", "230", "235"]);

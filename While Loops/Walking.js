function walking(input) {
  let index = 0;
  let finalGoal = 10000;
  let command = input[index++];
  let totalSteps = 0;
  while (command !== "Going home") {
    let steps = Number(command);
    totalSteps += steps;
    if (totalSteps > finalGoal) {
      break;
    }
    command = input[index++];
  }
  if (command === "Going home") {
    steps = Number(input[index++]);
    totalSteps += steps;
  }
  let diff = Math.abs(finalGoal - totalSteps);
  if (totalSteps >= finalGoal) {
    console.log(`Goal reached! Good job!`);
    console.log(`${diff} steps over the goal!`);
  } else console.log(`${diff} more steps to reach goal.`);
}

// walking(["1000", "1500", "2000", "6500"]);
// walking(["1500", "300", "2500", "3000", "Going home", "200"]);
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
walking(["125", "250", "4000", "30", "2678", "4682"]);

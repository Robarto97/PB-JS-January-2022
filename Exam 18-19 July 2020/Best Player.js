function bestPlayer(input) {
  let index = 0;
  let player = input[index++];
  let goals = Number(input[index]);
  let max = 0;
  let best = "";
  while (player !== "END") {
    if (goals > max) {
      max = goals;
      best = player;
    }
    if (goals >= 10) {
      break;
    }
    index++;
    player = input[index++];
    goals = Number(input[index]);
  }

  console.log(`${best} is the best player!`);
  if (max < 3) {
    console.log(`He has scored ${max} goals.`);
  } else {
    console.log(`He has scored ${max} goals and made a hat-trick !!!`);
  }
}
bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
bestPlayer(["Silva", "5", "Harry Kane", "10"]);
bestPlayer(["Petrov", "2", "Drogba", "11"]);

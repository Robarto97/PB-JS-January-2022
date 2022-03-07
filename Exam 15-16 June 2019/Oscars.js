function oscars(input) {
  const actorName = input[0];
  let points = Number(input[1]);
  const juryMembers = Number(input[2]);
  let index = 3;

  for (let i = 0; i < juryMembers; i++) {
    let juryName = input[index++];
    let givenPoints = Number(input[index++]);
    let totalPointsFromMember = (juryName.length * givenPoints) / 2;
    points += totalPointsFromMember;
    if (points >= 1250.5) {
      console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(
          1
        )}!`
      );
      break;
    }
  }
  if (points < 1250.5) {
    let diff = 1250.5 - points;
    console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
  }
}

oscars([
  "Sandra Bullock",
  "340",
  "5",
  "Robert De Niro",
  "50",
  "Julia Roberts",
  "40.5",
  "Daniel Day-Lewis",
  "39.4",
  "Nicolas Cage",
  "29.9",
  "Stoyanka Mutafova",
  "33",
]);

function gymnastics(input) {
  const country = input[0];
  const tool = input[1];
  let p1 = 0;
  let p2 = 0;

  switch (country) {
    case "Russia":
      switch (tool) {
        case "ribbon":
            p1 = 9.1;
            p2 = 9.4;
          break;
        case "hoop":
            p1 = 9.3;
            p2 = 9.8;
          break;
        case "rope":
            p1 = 9.6;
            p2 = 9;
          break;
      }
      break;
    case "Bulgaria":
      switch (tool) {
        case "ribbon":
            p1 = 9.6;
            p2 = 9.4;
          break;
        case "hoop":
            p1 = 9.55;
            p2 = 9.75;
          break;
        case "rope":
            p1 = 9.5;
            p2 = 9.4;
          break;
      }
      break;
    case "Italy":
      switch (tool) {
        case "ribbon":
            p1 = 9.2;
            p2 = 9.5;
          break;
        case "hoop":
            p1 = 9.45;
            p2 = 9.35;
          break;
        case "rope":
            p1 = 9.7;
            p2 = 9.15;
          break;
      }
      break;
  }
  let points = p1+p2;
  let pointsLeft = 20 - points;
  let percent = (pointsLeft/20)*100;
  console.log(`The team of ${country} get ${points.toFixed(3)} on ${tool}.`);
  console.log(`${percent.toFixed(2)}%`);
}

gymnastics(["Russia",
"rope"])

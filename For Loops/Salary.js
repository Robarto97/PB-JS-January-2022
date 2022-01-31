function salary(input) {
  let index = 0;
  const openTabs = Number(input[index++]);
  let money = Number(input[index++]);

  for (let i = 0; i < openTabs; i++) {
    let tab = input[index++];
    switch (tab) {
      case "Facebook":
        money -= 150;
        break;
      case "Instagram":
        money -= 100;
        break;
      case "Reddit":
        money -= 50;
        break;
    }
    if (money <= 0) {
      console.log("You have lost your salary.");
      break;
    }
  }
  if (money > 0) {
    console.log(money);
  }
}

salary([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);

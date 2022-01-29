function personTitles(input) {
  const age = Number(input[0]);
  const sex = input[1];

  if (age >= 16) {
    switch (sex) {
      case "m":
        console.log("Mr.");
        break;
      case "f":
        console.log("Ms.");
        break;
    }
  } else {
    switch (sex) {
      case "m":
        console.log("Master");
        break;
      case "f":
        console.log("Miss");
        break;
    }
  }
}

personTitles(["13.5", "m"]);

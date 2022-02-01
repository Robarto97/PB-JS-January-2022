function fuelTank(input) {
  let fuel = String(input[0]);
  const fuelLiter = Number(input[1]);

  if (fuel === "Diesel" || fuel === "Gasoline" || fuel === "Gas") {
    if (fuelLiter >= 25) {
      console.log(`You have enough ${fuel.toLowerCase()}.`);
    } else {
      console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
    }
  } else {
    console.log("Invalid fuel!");
  }
}

fuelTank(["Diesel", "10"]);
fuelTank(["Gasoline", "40"]);
fuelTank(["Gas", "25"]);
fuelTank(["Kerosene", "200"]);

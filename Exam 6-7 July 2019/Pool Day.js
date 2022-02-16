function poolDay(input) {
  const people = Number(input[0]);
  const entranceTax = Number(input[1]);
  const sunbedPrice = Number(input[2]);
  const umbrellaPrice = Number(input[3]);

  let totalTax = people * entranceTax;
  let totalSunbeds = Math.ceil(people * 0.75) * sunbedPrice;
  let totalUmbrellas = Math.ceil(people * 0.5) * umbrellaPrice;
  let totalPrice = totalTax + totalSunbeds + totalUmbrellas;
  console.log(totalPrice.toFixed(2) + " lv.");
}

poolDay(["21", "5.50", "4.40", "6.20"]);

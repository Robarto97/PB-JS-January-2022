function easterBake(input) {
  const breadNum = Number(input[0]);
  let index = 1;
  let sugar = 0;
  let flour = 0;
  let maxFlour = 0;
  let maxSugar = 0;

  for (let i = 0; i < breadNum; i++) {
    let sugarGr = Number(input[index++]);
    let flourGr = Number(input[index++]);

    if (flourGr > maxFlour) {
      maxFlour = flourGr;
    }
    if (sugarGr > maxSugar) {
      maxSugar = sugarGr;
    }

    sugar += sugarGr;
    flour += flourGr;
  }

  let flourPackages = Math.ceil(flour / 750);
  let sugarPackages = Math.ceil(sugar / 950);
  console.log("Sugar: " + sugarPackages);
  console.log("Flour: " + flourPackages);
  console.log(
    `Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`
  );
}

easterBake(["4",
"500",
"350",
"560",
"430",
"600",
"345",
"578",
"543"])

function foodForPets(input) {
  let index = 0;
  const days = Number(input[index++]);
  const totalFood = Number(input[index++]);
  let currFoodEaten = 0;
  let biscuits = 0;
  let dogFoodEaten = 0;
  let catFoodEaten = 0;

  for (let i = 1; i <= days; i++) {
    let dogFood = Number(input[index++]);
    let catFood = Number(input[index++]);
    dogFoodEaten += dogFood;
    catFoodEaten += catFood;
    currFoodEaten += dogFood + catFood;
    if (i % 3 === 0) {
      biscuits += 0.1 * (dogFood + catFood);
    }
  }
  console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
  console.log(
    `${((currFoodEaten / totalFood) * 100).toFixed(
      2
    )}% of the food has been eaten.`
  );
  console.log(
    `${((dogFoodEaten / currFoodEaten) * 100).toFixed(2)}% eaten from the dog.`
  );
  console.log(
    `${((catFoodEaten / currFoodEaten) * 100).toFixed(2)}% eaten from the cat.`
  );
}

foodForPets(["3", "500", "100", "30", "110", "25", "120", "35"]);

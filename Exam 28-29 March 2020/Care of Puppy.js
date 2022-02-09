function careOfPuppy(input) {
  let index = 0;
  const foodKg = Number(input[index++]);
  let foodGrams = foodKg * 1000;
  let command = input[index];
  while (command !== "Adopted") {
    let foodEaten = Number(command);
    foodGrams -= foodEaten;
    index++;
    command = input[index];
  }
  if (foodGrams >= 0) {
    console.log(`Food is enough! Leftovers: ${foodGrams} grams.`);
  } else
    console.log(
      `Food is not enough. You need ${Math.abs(foodGrams)} grams more.`
    );
}
careOfPuppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"]);
careOfPuppy(["3", "1000", "1000", "1000", "Adopted"]);
careOfPuppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"]);

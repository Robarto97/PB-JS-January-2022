function easterGuests(input) {
  const guests = Number(input[0]);
  const budget = Number(input[1]);

  const breadNum = Math.ceil(guests / 3);
  const eggsNum = guests * 2;
  const breadPrice = breadNum * 4;
  const eggsPrice = eggsNum * 0.45;
  const totalPrice = breadPrice + eggsPrice;
  const diff = Math.abs(budget - totalPrice);

  if (totalPrice <= budget) {
    console.log(`Lyubo bought ${breadNum} Easter bread and ${eggsNum} eggs.`);
    console.log(`He has ${diff.toFixed(2)} lv. left.`);
  } else {
    console.log("Lyubo doesn't have enough money.");
    console.log(`He needs ${diff.toFixed(2)} lv. more.`);
  }
}

easterGuests(["9",
"12"])


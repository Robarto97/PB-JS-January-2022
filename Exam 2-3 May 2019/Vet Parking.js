function vetParking(input) {
  const days = Number(input[0]);
  const hoursForDay = Number(input[1]);
  let totalPrice = 0;

  for (let i = 1; i <= days; i++) {
    let price = 0;
    for (let j = 1; j <= hoursForDay; j++) {
      if (i % 2 === 0) {
        if (j % 2 !== 0) {
          price += 2.5;
        } else {
          price += 1;
        }
      } else {
        if (j % 2 === 0) {
          price += 1.25;
        } else {
          price += 1;
        }
      }
    }
    console.log(`Day: ${i} - ${price.toFixed(2)} leva`);
    totalPrice += price;
  }
  console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}
vetParking(["5",
"2"])

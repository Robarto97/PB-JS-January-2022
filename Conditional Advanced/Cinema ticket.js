function cinemaTicket(input) {
  const day = input[0];
  let price = "";

  if (day === "Monday" || day === "Tuesday" || day === "Friday") {
    price = 12;
  } else if (day === "Wednesday" || day === "Thursday") {
    price = 14;
  } else price = 16;
  console.log(price);
}

cinemaTicket(["Sunday"]);

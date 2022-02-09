function agencyProfit(input) {
  const company = input[0];
  const adultTicketNum = Number(input[1]);
  const childTicketNum = Number(input[2]);
  const adultTicketPrice = Number(input[3]);
  const servicePrice = Number(input[4]);

  const childTicketPrice = adultTicketPrice * 0.3;
  const finalAdultTicketPrice = adultTicketPrice + servicePrice;
  const finalChildTicketPrice = childTicketPrice + servicePrice;

  const totalTicketPrice =
    adultTicketNum * finalAdultTicketPrice +
    childTicketNum * finalChildTicketPrice;
  const profit = totalTicketPrice * 0.2;
  console.log(
    `The profit of your agency from ${company} tickets is ${profit.toFixed(
      2
    )} lv.`
  );
}

agencyProfit(["WizzAir", 15, 5, 120, 40]);
agencyProfit(["Ryanair", 60, 23, 158.96, 39.12]);

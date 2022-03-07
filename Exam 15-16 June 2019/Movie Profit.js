function movieProfit(input) {
  const movieName = input[0];
  const days = Number(input[1]);
  const tickets = Number(input[2]);
  const ticketPrice = Number(input[3]);
  const percentage = Number(input[4]);

  const income = days * ticketPrice * tickets;
  const cinemaIncome = (income * percentage) / 100;
  const finalIncome = income - cinemaIncome;

  console.log(
    `The profit from the movie ${movieName} is ${finalIncome.toFixed(2)} lv.`
  );
}

movieProfit(["Python Basics",
"40",
"34785",
"10.45",
"14"])

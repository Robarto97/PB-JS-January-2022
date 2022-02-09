function birthdayParty(input) {
  const rent = Number(input);

  const cake = rent * 0.2;
  const drinks = cake * 0.55;
  const animator = rent / 3;
  const budget = rent + cake + drinks + animator;
  console.log(budget);
}

birthdayParty(2250);

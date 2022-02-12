function oscars(input) {
  const rentPrice = Number(input[0]);

  const statuesPrice = rentPrice * 0.7;
  const catering = statuesPrice * 0.85;
  const sound = catering * 0.5;

  const price = rentPrice + statuesPrice + catering + sound;
  console.log(price.toFixed(2));
}

oscars([3500]);
oscars([5555]);

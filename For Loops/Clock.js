function clock() {
  let minutes = 0;
  let hours = 0;
  console.log(`${hours} : ${minutes}`);
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j++) {
      minutes++;
      if (minutes == 60) {
        hours++;
        minutes = 0;
      }
      if (hours <= 23) {
        console.log(`${hours} : ${minutes}`);
      }
    }
  }
}

clock();

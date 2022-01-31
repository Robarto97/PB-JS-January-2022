function clock() {
  let minutes = 0;
  let hours = 0;
  let seconds = 0;
  console.log(`${hours} : ${minutes} : ${seconds}`);
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j++) {
      for (let k = 0; k < 60; k++) {
        seconds++;
        if (seconds == 60) {
          minutes++;
          seconds = 0;
        }
        if (minutes == 60) {
          minutes = 0;
          hours++;
        }
        if (hours <= 23) {
          console.log(`${hours} : ${minutes} : ${seconds}`);
        }
      }
    }
  }
}

clock();

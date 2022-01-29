function sleepyCat(input) {
  const dayOff = Number(input[0]);

  const normGameTime = 30000;
  const totalDays = 365;
  const workDays = totalDays - dayOff;

  const dayOffGame = 127;
  const workDayGame = 63;

  const realGameTime = workDays * workDayGame + dayOff * dayOffGame;
  const difference = Math.abs(normGameTime - realGameTime);

  const hours = Math.floor(difference / 60);
  const minutes = difference % 60;
  
  if(normGameTime <= realGameTime){
      console.log("Tom will run away");
      console.log(`${hours} hours and ${minutes} minutes more for play`);
  } else {
      console.log("Tom sleeps well");
      console.log(`${hours} hours and ${minutes} minutes less for play`)
  }
}

sleepyCat([20]);
sleepyCat([113]);

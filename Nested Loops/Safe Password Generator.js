function passGen(input) {
  const a = Number(input[0]);
  const b = Number(input[1]);
  const maxPass = Number(input[2]);
  let line = "";
  let A = 35;
  let B = 64;
  let passCount = 0;
  let limitAchieved = false;

  for (let x = 1; x <= a; x++) {
    for (let y = 1; y <= b; y++) {
      line += `${String.fromCharCode(A)}${String.fromCharCode(B)}${x}${y}${String.fromCharCode(B)}${String.fromCharCode(A)}|`;
      passCount++;
      if(passCount >= maxPass){
        limitAchieved = true;
        break;
      }
      A++;
      B++;
      if(A>55){
          A = 35;
      }
      if(B>96){
          B = 64;
      }
    }
    if(limitAchieved){
        break;
    }
  }

  console.log(line);
}

passGen([20, 50, 10]);

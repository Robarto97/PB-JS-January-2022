function secretDoor(input) {
  const hundreds = Number(input[0]);
  const tens = Number(input[1]);
  const ones = Number(input[2]);

  for(let i=1;i<=hundreds;i++){
      for(let j=1;j<=tens;j++){
          let isPrime = true;
          for(let k=1;k<=ones;k++){
              if(i%2 === 0 && k%2 === 0){
                  if(j>1){
                      for(let m = 2;m<j;m++){
                          if(j%m === 0){
                              isPrime = false;
                              break;
                          }
                      }
                      if(isPrime){
                          console.log(`${i} ${j} ${k}`);
                      }
                  }
              }
          }
      }
  }
}

secretDoor([8,2,8])
function easterDecor(input) {
  const clients = Number(input[0]);
  let index = 1;
  let totalPrice = 0;

  for (let i = 0; i < clients; i++) {
    let command = input[index];
    let price = 0;
    let counter = 0;

    while (command !== "Finish") {
      let product = command;
      switch (product) {
        case "basket":
            price +=1.5;
          break;
        case "wreath":
            price +=3.8;
          break;
        case "chocolate bunny":
            price +=7;
          break;
      }
      counter++;
      index++;
      command = input[index];
    }
    if(counter%2 ===0){
        price *=0.8;
    }
    if(command === "Finish"){
        console.log(`You purchased ${counter} items for ${price.toFixed(2)} leva.`);
    }
    totalPrice +=price;
    index++;
  }
  let avg = totalPrice/clients;
  console.log(`Average bill per client is: ${avg.toFixed(2)} leva.`);
}

easterDecor(["1",
"basket",
"wreath",
"chocolate bunny",
"wreath",
"basket",
"chocolate bunny",
"Finish"])



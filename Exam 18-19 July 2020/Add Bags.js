function addBags(input){
    const bagPrice20kg = Number(input[0]);
    const kg = Number(input[1]);
    const days = Number(input[2]);
    const bagsNum = Number(input[3]);
    let price = 0;

    if (kg < 10){
        price = 0.2*bagPrice20kg;
    } else if(kg>=10 && kg <=20){
        price = 0.5*bagPrice20kg;
    } else price = bagPrice20kg;

    if(days > 30){
        price *=1.1;
    } else if (days >=7 && days<=30){
        price *=1.15;
    } else price *= 1.4;

    price *=bagsNum;
    console.log(`The total price of bags is: ${price.toFixed(2)} lv.`);
}

addBags([30,18,15,2]);
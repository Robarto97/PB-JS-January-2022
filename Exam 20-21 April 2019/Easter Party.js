function easterParty(input){
    const guests = Number(input[0]);
    let coverPricePerPerson = Number(input[1]);
    const budget = Number(input[2]);

    if(guests >=10 && guests <=15){
        coverPricePerPerson *=0.85;
    } else if(guests >15 && guests <=20){
        coverPricePerPerson *=0.8;
    } else if(guests >20){
        coverPricePerPerson *=0.75;
    }

    const cakePrice= budget*0.1;
    const totalPrice = guests*coverPricePerPerson+cakePrice;
    const diff = Math.abs(budget - totalPrice);
    if(totalPrice<=budget){
        console.log(`It is party time! ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${diff.toFixed(2)} leva needed.`);
    }
}

easterParty(["24",
"35",
"550"])
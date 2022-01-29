function fuelTank(input){
    const typeFuel = input[0];
    const fuelLiters = Number(input[1]);
    const clubCard = input[2];

    const gasolinePrice = 2.22;
    const dieselPrice = 2.33;
    const gasPrice = 0.93;
    let fuelPrice = "";

    const gasolineDiscount = gasolinePrice - 0.18;
    const dieselDiscount = dieselPrice - 0.12;
    const gasDiscount = gasPrice - 0.08;

    if(typeFuel === "Gas"){
        if(clubCard === "Yes"){
            fuelPrice = fuelLiters*gasDiscount;
        } else if(clubCard === "No"){
            fuelPrice = fuelLiters*gasPrice;
        }
    } else if (typeFuel === "Gasoline"){
        if(clubCard === "Yes"){
            fuelPrice = fuelLiters*gasolineDiscount;
        } else if(clubCard === "No"){
            fuelPrice = fuelLiters*gasolinePrice;
        }
    } else if (typeFuel === "Diesel"){
        if(clubCard === "Yes"){
            fuelPrice = fuelLiters*dieselDiscount;
        } else if(clubCard === "No"){
            fuelPrice = fuelLiters*dieselPrice;
        }
    }

    if(fuelLiters >20 && fuelLiters<=25){
        fuelPrice *=0.92;
    } else if(fuelLiters > 25){
        fuelPrice *=0.9;
    }
    console.log(`${Number(fuelPrice).toFixed(2)} lv.`);
}

fuelTank(["Gas", "30", "Yes"]);
fuelTank(["Gasoline", "25", "No"]);
fuelTank(["Diesel", "19", "No"]);
function basketEquip(input){
    const yearFee = Number(input[0]);

    const sneakers = yearFee*0.6;
    const uniform = sneakers*0.8;
    const ball = uniform*0.25;
    const accessories = ball*0.2;

    const price = yearFee+sneakers+uniform+ball+accessories;
    console.log(price.toFixed(2));
}

basketEquip(["320"]) 
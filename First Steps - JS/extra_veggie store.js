function veggieStore(input){
    const veggiesPerKg = Number(input[0]);
    const fruitsPerKg = Number(input[1]);
    const totalVeggieKgs = Number(input[2]);
    const totalFruitKgs = Number(input[3]);

    const totalLeva = veggiesPerKg*totalVeggieKgs + fruitsPerKg*totalFruitKgs;
    const totalEuro = totalLeva/1.94;
    console.log(totalEuro.toFixed(2));
}

veggieStore([0.194,19.4,10,10]);
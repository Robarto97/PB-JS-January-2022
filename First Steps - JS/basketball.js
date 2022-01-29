function basketCosts(input){
    let yearCost = Number(input[0]);
    let shoes = yearCost - yearCost*0.4;
    let equipment = shoes - shoes*0.2;
    let ball = equipment/4;
    let accessories = ball/5;
    let totalSum = yearCost + shoes + equipment + ball + accessories;
    console.log(totalSum);
}

basketCosts([365]);
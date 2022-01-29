function pets(input){
    const days = Number(input[0]);
    const foodLeft = Number(input[1]);
    const dogFoodPerDay = Number(input[2]);
    const catFoodPerDay = Number(input[3]);
    const turtleFoodPerDay = Number(input[4])/1000;

    const dogFoodNeeded = dogFoodPerDay*days;
    const catFoodNeeded = catFoodPerDay*days;
    const turtleFoodNeeded = turtleFoodPerDay*days;
    const totalFood = dogFoodNeeded + catFoodNeeded + turtleFoodNeeded;
    const difference = Math.abs(totalFood - foodLeft);

    if (totalFood <= foodLeft){
        console.log(`${Math.floor(difference)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(difference)} more kilos of food are needed.`);
    }
}

pets([2,10,1,1,1200]);
pets([5,10,2.1,0.8,321]);
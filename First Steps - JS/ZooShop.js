function costs(input){
    let dogFood = input[0];
    let catFood = input[1];
    let dogFoodPrice = 2.50;
    let catFoodPrice = 4;
    let costs = dogFood*dogFoodPrice + catFood*catFoodPrice; 
    let result = `${costs} lv.`;
    console.log(result);
}

costs(["5", "4"]);
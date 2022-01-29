function delivery(input){
    let chickenPrice = 10.35;
    let fishPrice = 12.4;
    let vegeterianPrice = 8.15;
    let numChicken = Number(input[0]);
    let numFish = Number(input[1]);
    let numVegeterian = Number(input[2]);
    const deliveryCost = 2.5;
    let totalMenu = numChicken*chickenPrice + numFish*fishPrice + numVegeterian*vegeterianPrice;
    let dessert = totalMenu*0.2;
    let final = totalMenu + dessert + deliveryCost;
    console.log(final); 
}

delivery([2,4,3]);
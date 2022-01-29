function harvest(input){
    const vineArea = Number(input[0]);
    const grapeForSquare = Number(input[1]);
    const wineNeeded = Number(input[2]);
    const workers = Number(input[3]);

    const totalGrapes = vineArea*grapeForSquare;
    const wine = totalGrapes*0.4/2.5;
    const difference = Math.abs(wine - wineNeeded);
    const winePerWorker = difference/workers;
    if(wine < wineNeeded){
        console.log(`It will be a tough winter! More ${Math.floor(difference)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(difference)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`);
    }
}

harvest([650,2,175,3]);
harvest([1020,1.5,425,4]);
function tennisRank(input){
    const tournamentsNum = Number(input[0]);
    const startPoints = Number(input[1]);
    let index = 1;
    let pointsGained = 0;
    let winCount = 0;

    for(let i =0; i<tournamentsNum;i++){
        let result = input[++index];
        switch(result){
            case "W": 
            pointsGained+=2000;
            winCount++;
            break;
            case "F": 
            pointsGained+=1200;
            break;
            case "SF": 
            pointsGained+=720;
            break;
        }
    }
    let totalPoints = startPoints+pointsGained;
    let avg = pointsGained/tournamentsNum;
    let winRate = winCount/tournamentsNum*100;
    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(avg)}`);
    console.log(`${winRate.toFixed(2)}%`);
}

tennisRank(["4",
"750",
"SF",
"W",
"SF",
"W"])
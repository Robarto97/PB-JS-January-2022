function tennisRankList(input){
    let index = 0;
    const totalTournamentCount = Number(input[index++]);
    const startPoints = Number(input[index++]);
    let points = 0;
    let winCounter = 0;
    for(let i = 0; i<totalTournamentCount; i++){
        let result = input[index++];
        switch(result){
            case "W": points +=2000; winCounter++; break;
            case "F": points +=1200; break;
            case "SF": points +=720; break;
        }
    }

    let finalPoints = points + startPoints;
    let avgPoints = Math.floor(points/totalTournamentCount);
    let winP = winCounter/totalTournamentCount*100;
    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${avgPoints}`);
    console.log(`${winP.toFixed(2)}%`);
}

tennisRankList(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])

function trainingLab(input){
    const w = Number(input[0])*100;
    const h = Number(input[1])*100;

    const freeH = h - 100;
    const deskPreRow = parseInt(freeH/70);   
    const rows = parseInt(w/120);
    const total = deskPreRow*rows - 3;
    console.log(total);
}

trainingLab([15,8.9]);
trainingLab([8.4,5.2]);
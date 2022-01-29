function firm(input){
    const neededHours = Number(input[0]);
    const days = Number(input[1]);
    const overtimeWorkers = Number(input[2]);

    const hoursToWork = days*0.9*8;
    const totalOvertime = overtimeWorkers*2*days;
    const totalHours = Math.floor(totalOvertime + hoursToWork);
    const difference = Math.abs(totalHours - neededHours);

    if(totalHours >= neededHours){
        console.log(`Yes!${difference} hours left.`);
    } else {
        console.log(`Not enough time!${difference} hours needed.`);
    }
}

firm([90,7,3]);
firm([99,3,1]);
firm([50,5,2]);
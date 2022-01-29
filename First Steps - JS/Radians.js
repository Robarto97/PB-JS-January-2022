function convertor(input){
    let radian = Number(input[0]);
    let pi = Math.PI;
    let angle = radian*180/pi;
    console.log(angle);
}

convertor([3.1416]);
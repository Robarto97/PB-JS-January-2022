function aquarium(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let occupationPercent = Number(input[3])/100;
    let volume = (lenght*width*height)/1000;
    let freeVolume = volume - volume*occupationPercent;
    console.log(freeVolume);
}

aquarium([85,75,47,17]);
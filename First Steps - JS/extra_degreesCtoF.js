function CtoF(input){
    const Celsius = Number(input[0]);
    const Fahren = Celsius*1.8 + 32;
    console.log(Fahren.toFixed(2));
}

CtoF([25]);
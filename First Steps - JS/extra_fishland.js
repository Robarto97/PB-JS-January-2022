function fishland(input){
    const mackerel = Number(input[0]);
    const sprat = Number(input[1]);
    const bonitoKG = Number(input[2]);
    const scadKG = Number(input[3]);
    const musselKG = Number(input[4]);

    const bonitoPricePerKG = mackerel + mackerel*0.6;
    const scadPricePerKG = sprat + sprat*0.8;
    const musselPricePerKG = 7.5;

    const totalPrice = bonitoKG*bonitoPricePerKG + scadKG*scadPricePerKG + musselKG*musselPricePerKG;
    console.log(totalPrice.toFixed(2));
}

fishland([6.90,4.20,1.5,2.5,1]);
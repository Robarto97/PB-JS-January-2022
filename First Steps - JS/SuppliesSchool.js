function supplies(input){
    let pens = Number(input[0]);
    let marker = Number(input[1]);
    let chemical = Number(input[2]);
    let discount = Number(input[3])/100;
    let penPrice = 5.8;
    let markerPrice = 7.2;
    let chemicalPrice = 1.2;
    let totalPrice = pens*penPrice + marker*markerPrice + chemical*chemicalPrice;
    let fPrice = totalPrice - (totalPrice*discount);
    console.log(fPrice);
}

supplies([2,3,4,25]);
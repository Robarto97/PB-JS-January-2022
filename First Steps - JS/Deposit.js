function calculator(input){
    let sum = Number(input[0]);
    let term = Number(input[1]);
    let percent = Number(input[2])/100;
    let totalSum = sum + term*((sum*percent)/12);
    console.log(totalSum);
}

calculator([200,3,5.7]);
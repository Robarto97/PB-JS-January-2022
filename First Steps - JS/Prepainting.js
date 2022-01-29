function prepainting(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hoursWork = Number(input[3]);
    let nylonPrice = (nylon + 2)*1.5;
    let paintPrice = (paint + paint*0.1)*14.5;
    let thinnerPrice = thinner*5;
    const plasticPrice = 0.4;
    let totalSum = nylonPrice+paintPrice+thinnerPrice+plasticPrice;
    let workerPay = (totalSum*0.3)*hoursWork;
    let fSum = totalSum + workerPay;
    console.log(fSum);
}

prepainting([10,11,4,8]);
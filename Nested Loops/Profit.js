function profit(input){
    const oneLevCoins = Number(input[0]);
    const twoLevaCoins = Number(input[1]);
    const fiveLevaBills = Number(input[2]);
    const totalSum = Number(input[3]);

    for(let i=0;i<=oneLevCoins;i++){
        for(let j=0;j<=twoLevaCoins;j++){
            for(let k=0;k<=fiveLevaBills;k++){
                let sum = i*1 + j*2 + k*5;
                if(sum === totalSum){
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${totalSum} lv.`);
                }
            }
        }
    }
}

profit([5,3,1,7]);
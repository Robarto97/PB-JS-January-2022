function series(input){
    const budget = Number(input[0]);
    const seriesNum = Number(input[1]);
    let index = 2;
    let price = 0;
    for(let i=0; i<seriesNum; i++){
        let seriesName = input[index++];
        let seriesPrice = Number(input[index++]);
        switch(seriesName){
            case "Thrones": 
            seriesPrice *=0.5;
            break;
            case "Lucifer": 
            seriesPrice *=0.6;
            break;
            case "Protector": 
            seriesPrice *=0.7;
            break;
            case "TotalDrama": 
            seriesPrice *=0.8;
            break;
            case "Area": 
            seriesPrice *=0.9;
            break;
        }
        price +=seriesPrice;
    }
    let diff = Math.abs(budget-price);
    if(budget >= price){
        console.log(`You bought all the series and left with ${diff.toFixed(2)} lv.`);
    }else {
        console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`);
    }
}
series(["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"])

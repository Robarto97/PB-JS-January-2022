function movieTickets(input){
    const a1 = Number(input[0]);
    const a2 = Number(input[1]);
    const n = Number(input[2]);
    let line = "";

    for(let i=a1; i<=a2-1;i++){
        if(i%2===0){
            continue;
        }
        for(let j=1; j<=n-1;j++){
            for(let k=1;k<=n/2-1;k++){
                let letter = String.fromCharCode(i);
                let sum = j+k+i;
                if(sum%2!==0){
                    line = `${letter}-${j}${k}${i}`;
                    console.log(line);
                }
                
            }
        }
    }
}

movieTickets(["71",
"74",
"6"])

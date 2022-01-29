function pipesInPool(input){
    const V = Number(input[0]);
    const P1 = Number(input[1]);
    const P2 = Number(input[2]);
    const N = Number(input[3]);

    const totalP1 = P1*N;
    const totalP2 = P2*N;
    const totalFromPipes = totalP1 + totalP2;

    const poolPercent = ((totalFromPipes/V)*100).toFixed(2);
    const p1Percent = ((totalP1/totalFromPipes)*100).toFixed(2);
    const p2Percent = ((totalP2/totalFromPipes)*100).toFixed(2);
    const poolOver = Math.abs(V - totalFromPipes).toFixed(2);
    
    if(totalFromPipes <= V){
        console.log(`The pool is ${poolPercent}% full. Pipe 1: ${p1Percent}%. Pipe 2: ${p2Percent}%.`);
    } else
    console.log(`For ${N} hours the pool overflows with ${poolOver} liters.`);
}

pipesInPool([1000,100,120,3]);
pipesInPool([100,100,100,2.5]);
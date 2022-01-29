function circle(input){
    const r = Number(input[0]);
    const P = 2*Math.PI*r;
    const S = Math.PI*r*r;
    console.log(S.toFixed(2));
    console.log(P.toFixed(2));
}

circle([3]);
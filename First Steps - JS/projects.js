function projects(input){
    let name = input[0];
    let numProj = input[1];
    let totalHours = numProj*3;
    let result = `The architect ${name} will need ${totalHours} hours to complete ${numProj} project/s.`;
    console.log(result); 
}

projects(["George", "4"]);
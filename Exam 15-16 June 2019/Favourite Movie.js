function favouriteMovie(input){
    let index = 0;
    let command = input[index];
    let max = Number.MIN_SAFE_INTEGER;
    let winner = "";
    let counter = 0;
    
    while(command !== "STOP"){
        let movieName = String(command);
        let points = 0;
        counter++;

        for(let i =0; i<movieName.length; i++){
            let letter = movieName[i];
            if(letter>="A" && letter<="Z"){
                points += letter.charCodeAt() - movieName.length;
            } else if(letter>="a" && letter<="z"){
                points += letter.charCodeAt() - movieName.length*2;
            } else {
                points +=letter.charCodeAt();
            }
        }

        if(points>max){
            max=points;
            winner = movieName;
        }
        if(counter === 7){
            console.log("The limit is reached.");
            break;
        }
        index++;
        command = input[index];
    }
    console.log(`The best movie for you is ${winner} with ${max} ASCII sum.`);
}
favouriteMovie(["Wrong turn",
"The maze",
"Area 51",
"Night Club",
"Ice age",
"Harry Potter",
"Wizards"])


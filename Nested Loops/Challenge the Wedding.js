function challengeWedding(input) {
  const men = Number(input[0]);
  const women = Number(input[1]);
  const totalTables = Number(input[2]);
  let line = "";
  let tableCount = 0;
  let occupied = false;

  for (let i = 1; i <= men; i++) {
    for (let j = 1; j <= women; j++) {
        tableCount++;
        line += `(${i} <-> ${j}) `;
        if(tableCount === totalTables){
            occupied = true;
            break
        }
    }
    if(occupied){
        break;
    }
  }
  console.log(line);
}

challengeWedding([5, 8, 40]);

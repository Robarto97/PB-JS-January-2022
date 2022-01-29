function housePaint(input){
    const x = Number(input[0]);
    const y = Number(input[1]);
    const h = Number(input[2]);

    const door = 2.4;
    const window = 2.25;
    const sideWall = x*y;
    const frontBackWall = x*x;
    const totalWallArea = (sideWall*2 - window*2) + (frontBackWall*2 - door);
    const greenPaint = totalWallArea/3.4;
    console.log(greenPaint.toFixed(2));

    const roofRect = x*y;
    const roofTriangle = x*h/2;
    const totalRoofArea = roofRect*2 + roofTriangle*2;
    const redPaint = totalRoofArea/4.3;
    console.log(redPaint.toFixed(2));
}

housePaint([6,10,5.2]);
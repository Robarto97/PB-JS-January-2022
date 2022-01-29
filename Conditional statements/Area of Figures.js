function areaOfFigures(input) {
    const figure = String(input[0]);
    if (figure == "square") {
        let a = Number(input[1]);
        let areaSquare = a * a;
        console.log(areaSquare.toFixed(3));
    }
    else if (figure == "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        let areaRectrangle = a * b;
        console.log(areaRectrangle.toFixed(3));
    }
    else if (figure == "circle") {
        let r = Number(input[1]);
        let areaCircle = Math.PI * r * r;
        console.log(areaCircle.toFixed(3));
    }
    else if (figure == "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        let areaTriangle = a * h / 2;
        console.log(areaTriangle.toFixed(3));
    }
}

areaOfFigures(["square", "5"]);
areaOfFigures(["rectangle","7","2.5"]);
areaOfFigures(["circle","6"]);
areaOfFigures(["triangle","4.5","20"]);
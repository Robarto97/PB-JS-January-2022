function weatherForecast2 (input){
    const degree = Number(input[0]);
    if (26.00<=degree & degree<=35.00)
    console.log("Hot");
    else if (20.1<=degree & degree<=25.9)
    console.log("Warm");
    else if (15.00<=degree & degree<=20.00)
    console.log("Mild");
    else if (12.00<=degree & degree<=14.9)
    console.log("Cool");
    else if (5.00<=degree & degree<=11.9)
    console.log("Cold");
    else console.log("unknown");
}

weatherForecast2([16.5]);
weatherForecast2([8]);
weatherForecast2([22.4]);
weatherForecast2([26]);
weatherForecast2([0]);
weatherForecast2([36]);
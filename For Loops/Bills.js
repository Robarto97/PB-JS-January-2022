function bills(input) {
  let index = 0;
  const months = Number(input[index++]);
  const water = 20;
  const internet = 15;
  let electricity = 0;
  let totalElectricity = 0;
  let other = 0;
  let totalOther = 0;

  for (let i = 0; i < months; i++) {
    electricity = Number(input[index++]);
    totalElectricity += electricity;
    other = (electricity + water + internet) * 1.2;
    totalOther += other;
  }

  let totalWater = water * months;
  let totalInternet = internet * months;
  let avgMonth =
    (totalElectricity + totalWater + totalInternet + totalOther) / months;

  console.log(`Electricity: ${totalElectricity.toFixed(2)} lv`);
  console.log(`Water: ${totalWater.toFixed(2)} lv`);
  console.log(`Internet: ${totalInternet.toFixed(2)} lv`);
  console.log(`Other: ${totalOther.toFixed(2)} lv`);
  console.log(`Average: ${avgMonth.toFixed(2)} lv`);
}

bills([8, 123.54, 231.54, 140.23, 100, 122.4, 430, 178.52, 64.2]);

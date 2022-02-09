function trekkingMania(input) {
  const groupNum = Number(input[0]);
  let index = 1;
  let musalaCount = 0;
  let monblanCount = 0;
  let kiliCount = 0;
  let k2Count = 0;
  let everestCount = 0;
  let totalNum = 0;
  for (let i = 0; i < groupNum; i++) {
    let group = Number(input[index++]);
    totalNum += group;
    if (group <= 5) {
      musalaCount += group;
    } else if (group >= 6 && group <= 12) {
      monblanCount += group;
    } else if (group >= 13 && group <= 25) {
      kiliCount += group;
    } else if (group >= 26 && group <= 40) {
      k2Count += group;
    } else everestCount += group;
  }
  console.log((musalaCount/totalNum*100).toFixed(2)+"%");
  console.log((monblanCount/totalNum*100).toFixed(2)+"%");
  console.log((kiliCount/totalNum*100).toFixed(2)+"%");
  console.log((k2Count/totalNum*100).toFixed(2)+"%");
  console.log((everestCount/totalNum*100).toFixed(2)+"%");
}

trekkingMania([10, 10, 5, 1, 100, 12, 26, 17, 37, 40, 78]);

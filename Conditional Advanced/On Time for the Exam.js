function examArrival(input) {
  const examHour = Number(input[0]);
  const examMinute = Number(input[1]);
  const arrivalHour = Number(input[2]);
  const arrivalMinute = Number(input[3]);

  const totalExamMinutes = examHour * 60 + examMinute;
  const totalArrivalMinutes = arrivalHour * 60 + arrivalMinute;
  const differenceInTime = Math.abs(totalExamMinutes - totalArrivalMinutes);
  const hourDiff = Math.floor(differenceInTime / 60);
  let minDiff = differenceInTime % 60;
  if (minDiff === 0 || (minDiff < 10 && hourDiff > 0)) {
    minDiff = `0${minDiff}`;
  }

  if (totalArrivalMinutes === totalExamMinutes) {
    console.log(`On time`);
  } else if (totalArrivalMinutes > totalExamMinutes && differenceInTime < 60) {
    console.log(`Late`);
    console.log(`${minDiff} minutes after the start`);
  } else if (totalArrivalMinutes > totalExamMinutes && differenceInTime >= 60) {
    console.log(`Late`);
    console.log(`${hourDiff}:${minDiff} hours after the start`);
  } else if (differenceInTime <= 30) {
    console.log(`On time`);
    console.log(`${minDiff} minutes before the start`);
  } else if (differenceInTime > 30 && differenceInTime < 60) {
    console.log(`Early`);
    console.log(`${minDiff} minutes before the start`);
  } else {
    console.log(`Early`);
    console.log(`${hourDiff}:${minDiff} hours before the start`);
  }
}

examArrival(["9", "30", "9", "50"]);

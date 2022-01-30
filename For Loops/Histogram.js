function histogram(input) {
  const countNum = Number(input[0]);
  let d1Count = 0;
  let d2Count = 0;
  let d3Count = 0;
  let d4Count = 0;
  let d5Count = 0;
  for (let i = 1; i <= countNum; i++) {
    const num = Number(input[i]);
    if (num < 200) {
      d1Count++;
    } else if (num >= 200 && num <= 399) {
      d2Count++;
    } else if (num >= 400 && num <= 599) {
      d3Count++;
    } else if (num >= 600 && num <= 799) {
      d4Count++;
    } else if (num >= 800) {
      d5Count++;
    }
  }
  let p1 = ((d1Count / countNum) * 100).toFixed(2);
  let p2 = ((d2Count / countNum) * 100).toFixed(2);
  let p3 = ((d3Count / countNum) * 100).toFixed(2);
  let p4 = ((d4Count / countNum) * 100).toFixed(2);
  let p5 = ((d5Count / countNum) * 100).toFixed(2);
  console.log(`${p1}%\n${p2}%\n${p3}%\n${p4}%\n${p5}%`);
}

// histogram([3, 1, 2, 999]);
// histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
// histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
histogram([
  "14",
  "53",
  "7",
  "56",
  "180",
  "450",
  "920",
  "12",
  "7",
  "150",
  "250",
  "680",
  "2",
  "600",
  "200",
]);

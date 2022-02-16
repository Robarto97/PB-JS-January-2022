function mostPowerfulWord(input) {
  let index = 0;
  let command = input[index];
  let vowels = /[aeiouy]/i;
  let maxNumber = Number.MIN_SAFE_INTEGER;
  let maxWord = "";

  while (command !== "End of words") {
    let word = String(command);
    let points = 0;

    for (let i = 0; i < word.length; i++) {
      points += word[i].charCodeAt();
    }

    if (vowels.test(word[0])) {
      points *= word.length;
    } else {
      points = Math.floor(points / word.length);
    }
    if (points > maxNumber) {
      maxNumber = points;
      maxWord = word;
    }

    index++;
    command = input[index];
  }
  console.log(`The most powerful word is ${maxWord} - ${maxNumber}`);
}

mostPowerfulWord(["But",
"Some",
"People",
"Say",
"It's",
"LOVE",
"End of words"])


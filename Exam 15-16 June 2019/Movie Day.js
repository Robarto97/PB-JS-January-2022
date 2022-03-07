function movieDay(input) {
  const timePictures = Number(input[0]);
  const scenes = Number(input[1]);
  const timeDuration = Number(input[2]);

  const prep = timePictures * 0.15;
  const timeForScenes = scenes * timeDuration;
  const totalTimeNeeded = prep + timeForScenes;

  const diff = Math.abs(timePictures - totalTimeNeeded);

  if (totalTimeNeeded > timePictures) {
    console.log(
      `Time is up! To complete the movie you need ${Math.round(diff)} minutes.`
    );
  } else {
    console.log(
      `You managed to finish the movie on time! You have ${Math.round(
        diff
      )} minutes left!`
    );
  }
}

movieDay(["120", "10", "11"]);

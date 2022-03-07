function seriesCalc(input) {
  const seriesName = input[0];
  const seasons = Number(input[1]);
  const episodesPerSeason = Number(input[2]);
  const duration = Number(input[3]);

  const ads = duration * 0.2;
  const totalDuration = duration + ads;
  const addTime = seasons * 10;

  const totalTime = totalDuration * episodesPerSeason * seasons + addTime;
  console.log(
    `Total time needed to watch the ${seriesName} series is ${Math.floor(
      totalTime
    )} minutes.`
  );
}

seriesCalc(["Lucifer", "3", "18", "55"]);

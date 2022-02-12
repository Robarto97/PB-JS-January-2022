function movieRatings(input) {
  const moviesNum = Number(input[0]);
  let index = 1;
  let max = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  let movieMax = 0;
  let movieMin = 0;
  let totalRating = 0;
  for (let i = 0; i < moviesNum; i++) {
    let movieName = input[index++];
    let rating = Number(input[index++]);
    totalRating += rating;
    if (rating > max) {
      max = rating;
      movieMax = movieName;
    }
    if (rating < min) {
      min = rating;
      movieMin = movieName;
    }
  }
  let avg = totalRating/moviesNum;
  console.log(`${movieMax} is with highest rating: ${max.toFixed(1)}`);
  console.log(`${movieMin} is with lowest rating: ${min.toFixed(1)}`);
  console.log(`Average rating: ${avg.toFixed(1)}`);
}

movieRatings([
  "5",
  "A Star is Born",
  "7.8",
  "Creed 2",
  "7.3",
  "Mary Poppins",
  "7.2",
  "Vice",
  "7.2",
  "Captain Marvel",
  "7.1",
]);

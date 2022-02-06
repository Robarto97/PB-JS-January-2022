function sequence(input) {
  let index = 0;
  let n = Number(input[index++]);
  let num = 1;
  while (num <= n) {
    console.log(num);
    num = num*2 + 1;
  }
}

sequence(["31"]);

function operations(input) {
  const num1 = Number(input[0]);
  const num2 = Number(input[1]);
  const operator = input[2];

  let result = 0;
  let type = "";
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 != 0) result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
  }

  if (operator === "+" || operator === "-" || operator === "*") {
    if (result % 2 === 0) {
      type = "even";
    } else type = "odd";
    console.log(`${num1} ${operator} ${num2} = ${result} - ${type}`);
  }
  if (operator === "/") {
    if (num2 != 0) {
      console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
    } else console.log(`Cannot divide ${num1} by zero`);
  }
  if (operator === "%")
    if (num2 != 0) {
      console.log(`${num1} % ${num2} = ${result}`);
    } else console.log(`Cannot divide ${num1} by zero`);
}

operations(["7", "3", "*"]);

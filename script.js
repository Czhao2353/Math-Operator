const operator = prompt('Enter the operator (either +, -, *, or /): ');

const num1 = prompt("Enter the first number: ");
const num2 = prompt("Enter the second number: ");

let result;

if (operator == '+'){
  result = num1 + num2 
}

else if (operator == '-'){
  result = num1-num2
}
else if (operator == '*'){
  result = num1*num2
}
else if (operator == '/'){
  result = num1/num2;
  console.log('Remainder is...', result&2);
}
else {
  result = 'Invalid operator';
  const num3 = prompt('Enter the third number: ');
  console.log('Minimum: ', Math.min(num1, num2, num3));
  console.log('Maximum: ', Math.max(num1, num2, num3));
}

console.log('Result: ', result);
//Initialize variables and constant.
let a = 25;
let b = 20;
let c = 12;
let d = "15";
const e = 15;

//Display the sum of the declared variables and constant.
let sum = a + b + c + parseInt(d) + e;
console.log("The sum of the declared variables and constant is:", sum);

//Compare the values of variable d and constant e using relational operators.
console.log("Comparing variable d and constant e:");
console.log("d > e:", d > e);
console.log("d < e:", d < e);
console.log("d >= e:", d >= e);
console.log("d <= e:", d <= e);
console.log("d === e:", d === e);

// Declare new variables to store the result of operations.
let result1 = a - b - c - parseInt(d) - e;
let result2 = (a * c) / e;
let result3 = Math.pow(e, c);
let result4 = c; 

//Display the results.
console.log("Result 1: Subtract all the values of the declared variables:", result1);
console.log("Result 2: Multiply the values of variable a and c, divided by constant e:", result2);
console.log("Result 3: Exponent value of constant e raise to the power of variable c:", result3);
console.log("Result 4: Assigned value of c to result4:", result4);
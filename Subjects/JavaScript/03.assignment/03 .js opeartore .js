// JavaScript Assignment Answers
// 3. Subtract and Assign -=

// Q1. Health is 100. Player takes 35 damage.

// let health = 100;
// health -= 35;
// console.log(health); // 65

// Q2. Stock of 300 items is reduced by 45.

// let stock = 300;
// stock -= 45;
// console.log(stock); // 255

// Q3. Predict the output

// let lives = 5;
// lives -= 2;
// console.log(lives);

// Output: 3

// Q4. Predict the output

// let num = "40";
// num -= 15;
// console.log(num);

// Output: 25

// Explanation: JavaScript converts the string "40" into a number before subtraction.

// Q5. What is the result?

// let x = "abc";
// x -= 5;
// console.log(x);

// Output: NaN

// Explanation: "abc" cannot be converted into a valid number, so the subtraction results in NaN (Not a Number).

// 4. Multiply and Assign *=

// Q1. Price is ₹500. Apply 18% GST.

// let price = 500;
// price *= 1.18;
// console.log(price); // 590

// Q2. A quantity of 8 is tripled.

// let quantity = 8;
// quantity *= 3;
// console.log(quantity); // 24

// Q3. Predict the output

// let amount = 200;
// amount *= 1.1;
// console.log(amount);

// Output: 220.00000000000003 or 220 depending on how the result is displayed or rounded. In standard JavaScript, the raw result is typically 220.00000000000003 because of floating-point precision.

// Q4. Predict the output

// let val = "7";
// val *= 3;
// console.log(val);

// Output: 21

// Explanation: JavaScript converts "7" into the number 7 before multiplication.

// Q5. What is the result?

// let y = "hello";
// y *= 2;
// console.log(y);

// Output: NaN

// Explanation: "hello" cannot be converted into a number.

// 5. Divide and Assign /=

// Q1. Share 180 chocolates among 6 children.

// let chocolates = 180;
// chocolates /= 6;
// console.log(chocolates); // 30

// Q2. Distance is 300 km and time is 5 hours.

// let distance = 300;
// distance /= 5;
// console.log(distance); // 60 km/h

// Q3. Predict the output

// let total = 400;
// total /= 8;
// console.log(total);

// Output: 50

// Q4. Predict the output

// let num = "100";
// num /= 4;
// console.log(num);

// Output: 25

// Q5. What is the result?

// let z = 50;
// z /= 0;
// console.log(z);

// Output: Infinity

// Explanation: In JavaScript, a positive number divided by positive zero produces positive infinity.

// 6. Modulus and Assign %=

// Q1. Divide 47 by 6 and store the remainder.

// let num = 47;
// num %= 6;
// console.log(num); // 5

// Q2. Counter is 23. Keep the remainder when divided by 12.

// let counter = 23;
// counter %= 12;
// console.log(counter); // 11

// Q3. Predict the output

// let num = 29;
// num %= 5;
// console.log(num);

// Output: 4

// Q4. Predict the output

// let x = "17";
// x %= 3;
// console.log(x);

// Output: 2

// Explanation: JavaScript converts "17" into the number 17. The remainder of 17÷3 is 2.

// Q5. What is the result?

// let m = 15;
// m %= 0;
// console.log(m);

// Output: NaN

// Explanation: The remainder operation with a zero divisor produces NaN in JavaScript.

// 7. Exponentiation and Assign **=

// Q1. Side of a cube is 5. Calculate its volume.

// let side = 5;
// side **= 3;
// console.log(side); // 125

// Explanation: 5
// 3
// =5×5×5=125.

// Q2. Square the number 4.

// let num = 4;
// num **= 2;
// console.log(num); // 16

// Q3. Predict the output

// let base = 2;
// base **= 5;
// console.log(base);

// Output: 32

// Q4. Predict the output

// let n = 4;
// n **= 0.5;
// console.log(n);

// Output: 2

// Explanation: Raising a positive number to the power 0.5 calculates its square root.

// Q5. What is the result?

// let p = 2;
// p **= -1;
// console.log(p);

// Output: 0.5

// Explanation: A negative exponent gives the reciprocal.

// 2
// −1
// =
// 2
// 1
// 	​

// =0.5
// C] Comparison Operators
// 1. Loose Equality ==

// Q1. Check whether "25" is loosely equal to 25.

// console.log("25" == 25); // true

// Explanation: == converts the string to a number before comparing.

// Q2. Check whether 0 == false returns true or false.

// console.log(0 == false); // true

// Q3. Predict the output

// console.log(10 == "10");
// console.log(null == undefined);

// Output:

// true
// true

// Q4. Predict the output

// console.log("" == 0);
// console.log([] == false);

// Output:

// true
// true

// Explanation: Loose equality performs type conversion before comparing these values.

// Q5. Why does NaN == NaN return false?

// console.log(NaN == NaN); // false

// Explanation: NaN is not equal to any value, including itself. Use Number.isNaN() to check whether a value is NaN.

// 2. Loose Inequality !=

// Q1. Check whether "18" != 18 returns true or false.

// console.log("18" != 18); // false

// Explanation: Both values become the number 18, so they are equal.

// Q2. Password is "1234". User enters 1234 as a number. Will != return true?

// console.log("1234" != 1234); // false

// Explanation: Loose inequality converts the string to a number, so the values are considered equal.

// Q3. Predict the output

// console.log(5 != "5");
// console.log(0 != false);

// Output:

// false
// false

// Q4. Predict the output

// console.log(null != undefined);
// console.log("" != 0);

// Output:

// false
// false

// Q5. What does NaN != NaN return? Explain.

// console.log(NaN != NaN); // true

// Explanation: Since NaN == NaN is false, NaN != NaN is true.

// 3. Strict Equality ===

// Q1. Check whether "25" === 25 returns true or false.

// console.log("25" === 25); // false

// Explanation: Strict equality checks both value and data type. "25" is a string, while 25 is a number.

// Q2. Check 0 === false and null === undefined.

// console.log(0 === false);       // false
// console.log(null === undefined); // false

// Q3. Predict the output

// console.log(10 === "10");
// console.log(true === 1);

// Output:

// false
// false

// Q4. Predict the output

// console.log("" === 0);
// console.log([] === false);

// Output:

// false
// false

// Q5. Why is === preferred over == in most real-world code?

// === checks both the value and data type.

// It does not automatically convert different data types.

// It helps avoid unexpected comparison results.

// It makes code easier to understand and debug.

// Example:

// console.log(5 == "5");  // true
// console.log(5 === "5"); // false
// 4. Strict Inequality !==

// Q1. Check whether "18" !== 18 returns true or false.

// console.log("18" !== 18); // true

// Explanation: The values have different data types, so they are strictly unequal.

// Q2. Check 0 !== false and null !== undefined.

// console.log(0 !== false);        // true
// console.log(null !== undefined); // true

// Q3. Predict the output

// console.log(5 !== "5");
// console.log(true !== 1);

// Output:

// true
// true

// Q4. Predict the output

// console.log("" !== 0);
// console.log(NaN !== NaN);

// Output:

// true
// true

// Q5. Write a condition that checks if input is strictly not equal to the string "0".

// if (input !== "0") {
//     console.log("Input is not the string 0");
// }
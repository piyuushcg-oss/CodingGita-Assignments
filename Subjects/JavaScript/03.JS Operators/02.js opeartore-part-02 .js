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

// Q5.::::::::::::::

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


// 3. Strict Equality ===

// Q1. Check whether "25" === 25 returns true or false.

// console.log("25" === 25); // false




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
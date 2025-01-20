console.log(1<2<3) //true
console.log(3>2>1) //false


// Expression 1: console.log(1 < 2 < 3)
// JavaScript evaluates expressions from left to right. So the first part is 1 < 2.
// 1 < 2 is true because 1 is indeed less than 2.
// Now the next part is true < 3.
// In JavaScript, when comparing a boolean (true) with a number (3), the boolean is coerced into a number. true becomes 1.
// So the comparison becomes 1 < 3, which is true.
// Therefore, the result of 1 < 2 < 3 is true, and console.log(true) outputs true.

// Expression 2: console.log(3 > 2 > 1)
// Again, JavaScript evaluates expressions from left to right. The first part is 3 > 2.
// 3 > 2 is true because 3 is greater than 2.
// Now the next part is true > 1.
// As before, true is coerced into 1 (since true becomes 1).
// So the comparison becomes 1 > 1, which is false.
// Therefore, the result of 3 > 2 > 1 is false, and console.log(false) outputs false.

// Summary:
// 1 < 2 < 3 evaluates to true because of how JavaScript handles comparisons and coercion of true to 1.
// 3 > 2 > 1 evaluates to false because after 3 > 2 is evaluated as true, it turns into 1 > 1, which is false.
 const userEmail = "shraddha@gmail.com"
 if(userEmail){ //useremail ki kutch value hai toh true maan lega 
    console.log("got user email")
 } else{
    console.log("dont have email")
 }

//falsy values
//  false , 0 , -0 , null , undefined , BigInt 0n , "" , NaN

// truthy values
//🎯 "0" , "false" , " " {🎀as these strings are not empty isliye truthy h }
//[] , {} , function(){}

// ✅ Example 1: When value is not null or undefined, it returns the value itself.
let val1;
val1 = 5 ?? 10;
console.log(val1);  // Output: 5

// ✅ Example 2: When value is null, it returns the value on the right-hand side.
val1 = null ?? 10;
console.log(val1);  // Output: 10 (null is replaced by the right value)

// ✅ Example 3: When value is undefined, it returns the value on the right-hand side.
val1 = undefined ?? 15;
console.log(val1);  // Output: 15 (undefined is replaced by the right value)

// ✅ Example 4: Chaining nullish coalescing operator.
val1 = null ?? 10 ?? 20;
console.log(val1);  // Output: 10 (First null is replaced by 10)



//terniary operator
// condition ? if true: if false

const icePrice = 100
 icePrice <= 80 ? console.log("less than 80") : console.log("more than 80")

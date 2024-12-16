// 🏷️ Variable Scope in JavaScript

let a = 300;  // 🌍 Global Scope (accessible anywhere in the program)

if (true) {
    let a = 10;  // 🔒 Local Scope inside the if-block (different from global 'a')
    const b = 20;  // 🔒 Local Scope for 'b' inside the if-block (const is block-scoped)
    var c = 30;  // 🌍 Global Scope (because 'var' is function-scoped or globally scoped)

    // 📌 Inside the block:
    // console.log(a);  // 🖨️ Prints 10 because this 'a' is local to the if-block
    // console.log(b);  // 🖨️ Prints 20 because 'b' is only accessible within the if-block
    // console.log(c);  // 🖨️ Prints 30 because 'c' is globally scoped, even though it's declared inside the block
}

// 📌 Outside the block:
// console.log(a);  // 🖨️ Prints 300 because this 'a' is from the global scope
// console.log(b);  // ❌ Throws an error because 'b' is not accessible outside the if-block
// console.log(c);  // 🖨️ Prints 30 because 'c' is globally scoped and can be accessed anywhere

// ✅ Key Takeaways:
// 1. 'let' and 'const' have block-level scope, so variables declared inside a block can't be accessed outside it.
// 2. 'var' has function/global scope, so it's accessible outside the block if declared within a function or globally.
// 3. Always be mindful of the scope to avoid accidental global variable pollution!


// function one(){
//     const username = "shradha"
//     function two(){
//         const website = "youtube"
//         console.log(username)
//     }
//     // console.log(website) //website local variable hai global nhi so uss block ke bahar access nhi kr skte
//     two()
// }
// one()

// if(true){
//     const username = "shradha"
//     if(username ==="shradha"){
//         const website = "  yt"
//         console.log(username + website)
//     }
// // console.log(website) //gave error as block ke bahar access kr rhe hain and it has local scope
// }
// console.log(username)

// *****************************************

/* The function addone(num) is declared using a function declaration. In JavaScript, function declarations are hoisted. This means that the function definition is moved to the top of its scope during the compilation phase, allowing you to call the function even before the actual line where it’s defined.
In the code, addone(5) works even though it is called before the function is defined in the code. JavaScript knows about the function declaration due to hoisting.*/


// ✅ Function Declaration (Hoisted)
// We can call the function before its definition because of hoisting.
console.log(addone(5))  // Output: 6
function addone(num) {
    return num + 1;  // Adds 1 to the given number
}

// ❌ Function Expression (Not Hoisted)
// You cannot call the function before it is assigned to a variable.
console.log(addTwo(5))  // Error: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;  // Adds 2 to the given number
}

// ✅ Correct usage of function expression, after initialization.
console.log(addTwo(5))  // Output: 7

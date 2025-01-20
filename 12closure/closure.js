// Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned,
//  even if its vanished in execution context but still it remembers the reference it was pointing to. 
// Its not just that function alone it returns but the entire closure and that's where it becomes interesting

function x() {
    let a = 5; // Variable declared in the scope of function x
    function y() {
        console.log(a); // Function y logs the value of 'a'
    }
    a=19; //the function y will remember reference to a not the value of a so 19 will be returned
    return y; // x returns the function y  
}



// Assign the returned function to variable z
var z = x();

console.log(z); 
// Output: [Function: y]
// The output shows that z is the function y() { console.log(a); }

// Invoking z, which is essentially y
// z(); 🏮
// Output: 5 and in case a=19 output = 19;// The closure formed by function y remembers the reference to 'a' in its lexical scope.
// Since 'a' was updated to 19 before returning y, invoking z() logs the updated value, 19.

// Even though the execution context of function y was lost after x() finished execution,
// the function y still remembers the variable 'a' from its lexical environment.
// This is because of closures. Closures allow a function to remember and access 
// its surrounding lexical environment even after the outer function has finished executing.

//Key Point: Closures "remember" everything in their lexical scope!
// function x() {
//     let a = 5; 
//      return function y() {
//         console.log(a); 
//     }
// } it is also same we used return statement in same line
//another great example

function w(){
    var a = 10;
    function x(){
        var b = 2;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}

w();

//will remember reference to a and b both


//another question

function A() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i); // Logs the value of 'i'
        }, i * 1000); // Delay increases with each iteration
    }
    console.log("namaste javascript");
}
A();
// OUTPUT
// namaste javascript
// 6
// 6
// 6
// 6
// 6 

// Explanation:
// Why does 6 print 5 times?
// var declares a single variable i that is shared across all iterations of the loop.
// When the setTimeout callback function executes, it references the value of i from the same memory location.
// By the time the setTimeout callbacks execute, the loop has already completed, and i has been incremented to 6.
// Key Concept:
// Closures in JavaScript remember references to variables, not their values at the time the function was created.
// All setTimeout functions are referencing the same i, which has a final value of 6 after the loop ends. 

function A() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i); // Logs the correct value of 'i'
        }, i * 1000);
    }
    console.log("namaste javascript");
}
A();
//OUTPUT
// namaste javascript
// 1
// 2
// 3
// 4
// 5
// Why does this work?

// let creates a new block-scoped variable i for each iteration of the loop.
// Each setTimeout function has its own separate copy of i, preserving the expected value.
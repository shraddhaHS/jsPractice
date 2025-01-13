// Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned,
//  even if its vanished in execution context but still it remembers the reference it was pointing to. 
// Its not just that function alone it returns but the entire closure and that's where it becomes interesting

function x() {
    let a = 5; // Variable declared in the scope of function x
    function y() {
        console.log(a); // Function y logs the value of 'a'
    }
    return y; // x returns the function y
}

// Assign the returned function to variable z
var z = x();

console.log(z); 
// Output: [Function: y]
// The output shows that z is the function y() { console.log(a); }

// Invoking z, which is essentially y
z(); 
// Output: 5
// Explanation: 
// Even though the execution context of function y was lost after x() finished execution,
// the function y still remembers the variable 'a' from its lexical environment.
// This is because of closures. Closures allow a function to remember and access 
// its surrounding lexical environment even after the outer function has finished executing.

// Key Point: Closures "remember" everything in their lexical scope!

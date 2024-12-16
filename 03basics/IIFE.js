// 🎯 **Immediately Invoked Function Expressions (IIFE)**

/* 
IIFE (Immediately Invoked Function Expression) is a function that is defined 
and executed immediately after its creation. It is used to avoid polluting 
the global scope and create a local scope for the code inside the function.
*/

(function chai(){ //name iife
    console.log("DB connected")
})();
//semicolon zaruri h isme end mai separate krneke liye
( (name) => { //simple iife
    console.log(`db connected two ${name}`)
} )('shradha')
//global scope pollution se bchne ke liye iife ka use krte h





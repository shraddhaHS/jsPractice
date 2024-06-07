//immediately invoked function expresions

// function chai(){
//     console.log("DB connected")
// }
// chai()
(function chai(){ //name iife
    console.log("DB connected")
})();
//semicolon zaruri h isme end mai separate krneke liye
( (name) => { //simple iife
    console.log(`db connected two ${name}`)
} )('shradha')
//global scope pollution se bchne ke liye iife ka use krte h

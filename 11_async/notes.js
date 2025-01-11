// Detailed Notes on Async JavaScript

// JavaScript Characteristics
// - JavaScript is **single-threaded**: It can only execute one piece of code at a time.
// - It is **synchronous by default**, meaning each operation executes one after the other in sequence.
// - However, JavaScript provides ways to handle **asynchronous operations** efficiently, so it appears responsive.
// - It is used with environments like **Node.js** or browsers, which add capabilities like file handling, timers, or DOM manipulation.

// Execution Context
// - JavaScript creates an **execution context** for each function or block of code.
// - Each execution context has two phases:
    // 1. **Memory Creation Phase**: Variables and functions are stored in memory.
    // 2. **Execution Phase**: Code is executed line by line.

// Call Stack and Memory Heap
// - **Call Stack**:
    // - Keeps track of function calls in a last-in, first-out (LIFO) manner.
    // - When a function is invoked, it is added to the stack.
    // - Once the function completes, it is removed from the stack.
    // Example:
    console.log("Start");
    function first() {
        console.log("First");
    }
    function second() {
        first();
        console.log("Second");
    }
    second();
    console.log("End");
    // Output: Start -> First -> Second -> End

// - **Memory Heap**:
    // - Stores objects and data for the program.

// Blocking vs Non-Blocking Code
// - **Blocking Code**:
    // - Executes sequentially and prevents the next line from running until it finishes.
    // Example:
    const data = fs.readFileSync("file.txt", "utf8"); // Blocks further code until file is read.
    console.log(data);

// - **Non-Blocking Code**:
    // - Allows other code to execute while waiting for a task to complete.
    // Example:
    fs.readFile("file.txt", "utf8", (err, data) => {
        if (err) throw err;
        console.log(data); // Executes after the file is read.
    });
    console.log("File read in progress"); // Executes immediately without waiting.


// Web API Methods and Asynchronous Execution
// - Methods like `setTimeout`, `setInterval`, and `fetch` are part of the **Web APIs** provided by the browser or Node.js, not the JavaScript engine.
// - These methods allow for asynchronous operations by delegating tasks to the environment.

// Example with `setTimeout`:
console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 1000);

console.log("End");

// **How This Works**:
// 1. `console.log("Start")` is added to the call stack and executed.
// 2. `setTimeout` is encountered. It is passed to the Web API, which handles the timer in the background. The callback function is registered to run after 1000ms.
// 3. `console.log("End")` is added to the call stack and executed immediately.
// 4. Once the timer completes (1000ms), the callback function is moved to the **Task Queue**.
// 5. The **Event Loop** checks if the call stack is empty and moves the callback to the stack for execution.
// **Output**: Start -> End -> Inside setTimeout

// Common Interview Questions
// 1. **What will this code output? Why?**
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
// Answer:
// - Output: A -> C -> B
// - Explanation: `setTimeout` is asynchronous. Its callback is moved to the Task Queue and executes after the current stack is cleared.

// 2. **How does the Event Loop work?**
// - The Event Loop continuously checks the Call Stack and Task Queue.
// - If the Call Stack is empty, it pushes tasks from the Task Queue to the Call Stack for execution.

// 3. **What happens if the delay in `setTimeout` is 0?**
setTimeout(() => console.log("Hello"), 0);
console.log("World");
// Answer:
// - Output: World -> Hello
// - Explanation: Even with a delay of 0, the callback is sent to the Task Queue. It executes only after the current stack is cleared.


// Real-World Example
// - Handling API calls with `fetch`:
console.log("Fetching data...");
fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
console.log("Data fetch initiated");
// Output: Fetching data... -> Data fetch initiated -> [API Data]

// Key Takeaways
// - JavaScript manages asynchronous operations using the Event Loop, Task Queue, and Web APIs.
// - Understand the behavior of `setTimeout` and other asynchronous methods to answer interview questions effectively.

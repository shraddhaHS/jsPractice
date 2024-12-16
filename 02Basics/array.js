// 🎀 JavaScript Arrays 🎀

// Arrays in JavaScript:
// - Can hold different data types.
// - Are resizable (i.e., dynamic in size).

const myArr = [0, 1, 2, 3, 4, 5, 6, true, "shraddha"]; // Example array
const anotherArr = [0, 1, 2, 3, 4, 5, 6];

// ** Shallow Copy in Arrays **
// When you assign an array to a new variable, a shallow copy is created.
// Both variables point to the same memory location.

const shallowCopy = myArr; // Reference the same array
shallowCopy[0] = 99; // Modifies the original array
console.log(myArr); // Output: [99, 1, 2, 3, 4, 5, 6, true, "shraddha"]

// Use deep copy for independent modification (e.g., JSON methods or lodash).
// Deep copies avoid unexpected side effects by creating entirely new objects.

console.log("--------------------------");

/* 🎀 ARRAY METHODS 🎀 */

// Adding/Removing Elements
myArr.push(7);         // Adds an element to the end
myArr.pop();           // Removes the last element
myArr.unshift(0);      // Adds an element to the beginning
myArr.shift();         // Removes the first element

console.log(myArr.includes(4)); // Check if 4 exists (returns true/false)
console.log(myArr.indexOf(9));  // Returns index of 9, or -1 if not found

// Joining and Converting to String
const newArr = myArr.join();    // Converts array to string (comma-separated)
console.log(newArr);            // Output: "99,1,2,3,4,5,6,true,shraddha"
console.log(typeof newArr);     // Type: string

console.log("--------------------------");

/* 🎀 SLICE & SPLICE 🎀 */

// SLICE: Extracts a portion of an array (does not modify original array)
console.log("Original Array:", myArr);
const slicedArr = myArr.slice(1, 3); // Extracts elements at index 1 and 2
console.log("Sliced Array:", slicedArr);
console.log("After Slice:", myArr);  // Original array remains unchanged

// SPLICE: Removes/Modifies elements in the original array
const splicedArr = myArr.splice(1, 3); // Removes elements from index 1 to 3
console.log("Spliced Elements:", splicedArr);
console.log("After Splice:", myArr);  // Original array is modified

console.log("--------------------------");

/* 🎀 WORKING WITH MULTIPLE ARRAYS 🎀 */

const marvelHeroes = ["Thor", "Ironman", "Spiderman"];
const dcHeroes = ["Superman", "Flash", "Batman"];

// Adding one array as a single element to another
marvelHeroes.push(dcHeroes); // Entire array becomes one element
console.log(marvelHeroes);   // ["Thor", "Ironman", "Spiderman", ["Superman", "Flash", "Batman"]]

// Concatenating arrays (does not modify originals)
const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes);      // ["Thor", "Ironman", ..., "Flash", "Batman"]

// Spread operator for merging arrays
const spreadHeroes = [...marvelHeroes, ...dcHeroes];
console.log(spreadHeroes);   // All elements in a single array
// Spread operator > concat: Works for more than 2 arrays!

console.log("--------------------------");

/* 🎀 FLATTENING ARRAYS 🎀 */

const nestedArray = [1, 2, 3, [4, 5, 6], [6, 7, [4, 5]]];
const flatArray = nestedArray.flat(Infinity); // Flatten nested arrays to any depth
console.log(flatArray);                       // [1, 2, 3, 4, 5, 6, 6, 7, 4, 5]

console.log("--------------------------");

/* 🎀 ARRAY UTILITIES 🎀 */

// Check if a value is an array
console.log(Array.isArray("Hitesh")); // Output: false
console.log(Array.isArray(myArr));    // Output: true

// Convert a string to an array
console.log(Array.from("Hitesh"));   // Output: ['H', 'i', 't', 'e', 's', 'h']

// Create an array from arguments
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300]


// The reduce() method allows you to process an array and accumulate the result into a single value 
// (like a sum, product, or any custom result). It iterates over every element in the array and applies
//  a function that you define, updating the accumulated value (the "accumulator") on each iteration.

const myNums = [1,2,3]
//used in adding up cart value

const myTotal = myNums.reduce((acc,curVal) => {
    console.log(`acc: ${acc} and current value is ${curVal}`)
    return acc+curVal
} ,0 )//0 acc ki value initialise krneke liye

//other way to write this code using arrow function in one line
// const myTotal = myNums.reduce((acc,curr) => acc+curr,0)
console.log(myTotal)

const shopCart = [
    {
        itemName: "js course",
        price: 5999
    },
    {
        itemName: "devops",
        price: 9999
    },
    {
        itemName: "python course",
        price: 999
    }
]
const priceToPay = shopCart.reduce((acc,item)=> acc +item.price ,0 )
console.log(priceToPay)

// --------------------------------------------
// JavaScript reduce() Method
// --------------------------------------------

// The `reduce()` method processes an array and accumulates the result into a single value.

// // Syntax:
// const result = array.reduce((accumulator, currentValue, currentIndex, array) => {
//     // Callback function logic
// }, initialValue); // Optional initial value for the accumulator

// // --------------------------------------------
// // Basic Example: Summing up all numbers in an array
// // --------------------------------------------
// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, curVal) => {
//   return acc + curVal;
// }, 0); // 0 is the initial value for the accumulator

// console.log(sum); // Output: 15

// // --------------------------------------------
// // Example: Finding the Maximum Number in an Array
// // --------------------------------------------
// const numbers = [10, 5, 8, 20, 3];

// const max = numbers.reduce((acc, curVal) => {
//   return acc > curVal ? acc : curVal; // Return the larger of acc and curVal
// }, -Infinity); // Start with a very low value

// console.log(max); // Output: 20

// // --------------------------------------------
// // Example: Flattening an Array of Arrays
// // --------------------------------------------
// const nestedArrays = [[1, 2], [3, 4], [5, 6]];

// const flatArray = nestedArrays.reduce((acc, curVal) => {
//   return acc.concat(curVal); // Concatenate each sub-array into the accumulator
// }, []); // Start with an empty array

// console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]

// // --------------------------------------------
// // Example: Counting Occurrences of Values in an Array
// // --------------------------------------------
// const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

// const counts = numbers.reduce((acc, curVal) => {
//   if (acc[curVal]) {
//     acc[curVal] += 1; // Increment the count if curVal already exists in acc
//   } else {
//     acc[curVal] = 1; // Initialize the count if curVal doesn't exist in acc
//   }
//   return acc;
// }, {}); // Start with an empty object

// console.log(counts); // Output: { 1: 1, 2: 2, 3: 3, 4: 4 }

// // --------------------------------------------
// // Advanced Example: Transforming an Array into an Object
// // --------------------------------------------
// const users = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' }
// ];

// const userObject = users.reduce((acc, user) => {
//   acc[user.id] = user.name; // Use user.id as the key and user.name as the value
//   return acc;
// }, {});

// console.log(userObject); // Output: { 1: 'Alice', 2: 'Bob', 3: 'Charlie' }

// // --------------------------------------------
// // Example: Calculating the Product of All Numbers
// // --------------------------------------------
// const numbers = [1, 2, 3, 4, 5];

// const product = numbers.reduce((acc, num) => acc * num, 1);

// console.log(product); // Output: 120 (1*2*3*4*5)

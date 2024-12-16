// ✨ OBJECT LITERALS IN JAVASCRIPT ✨

// 📝 What are Object Literals?
// An object literal is a way to define an object in JavaScript using key-value pairs. 
// It allows us to store properties and methods for easy data organization.

// 🎉 Example of an Object Literal:
const mySym = Symbol("key1"); // Symbol creates a unique key.

const JsUser = {
  name: "Shraddha", // Simple key-value pair
  "full name": "Shraddha Singh", //This cant be accesses using jsuser.___ method, Key with a space (needs [] bracket notation for access)
  age: 18, // Numeric value
  [mySym]: "mykey1", // Symbol key with computed property syntax
  location: "Rome", // Another string key-value
  lastLoginDays: ["Monday", "Saturday"], // Array as a value
  email: "ssb@gmail.com", // Email as a string
};

// 🔍 HOW TO ACCESS OBJECT PROPERTIES 🔍

// 1️⃣ Accessing using Dot Notation
console.log(JsUser.email); 
// Output: ssb@gmail.com 
// ⚠️ This method works but isn't ideal for all keys.

// 2️⃣ Accessing using Bracket Notation
console.log(JsUser["email"]); 
// Output: ssb@gmail.com
// ✅ Bracket notation is more flexible and works with all keys.

console.log(JsUser["full name"]); 
// Output: Shraddha Singh
// ⚠️ For keys like "full name" (containing spaces), dot notation won't work. Use bracket notation instead.

// 3️⃣ Accessing a Symbol Key
console.log(JsUser[mySym]); 
// Output: mykey1

// 4️⃣ Checking the Type of a Symbol Key Value
console.log(typeof JsUser[mySym]); 
// Output: string

// 🌟 MODIFYING OBJECT PROPERTIES 🌟

// ✅ Updating a property value
JsUser.email = "shradha@gmail.com"; // Overriding the email value
console.log(JsUser.email); 
// Output: shradha@gmail.com

// ❄️ Freezing the object to make it immutable:
Object.freeze(JsUser); // Prevents further modifications
JsUser.email = "xyzzzzz@gmail.com"; // This won't work because the object is frozen.
console.log(JsUser.email); 
// Output: shradha@gmail.com (unchanged)

// 🎉 ADDING METHODS TO THE OBJECT 🎉

// Adding a method to print a greeting
JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greeting(); 
// Output: Hello JS user

// Adding another method with the `this` keyword to access object properties
JsUser.greeting2 = function () {
  console.log(`Hello JS user, ${this.name}`);
};
JsUser.greeting2(); 
// Output: Hello JS user, Shraddha

// 🌟 FINAL NOTES:
// - Use **dot notation** for simple keys like `name` or `email`.
// - Use **bracket notation** for keys with spaces or special characters, like `"full name"`.
// - Freezing an object with `Object.freeze()` ensures it cannot be modified further.
// - The `this` keyword inside a method refers to the object itself, allowing access to its properties.


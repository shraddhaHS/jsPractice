//  "use strict"; // treat all js code as newer version
// //  alert(3+3)  yeh browser mai console mai run kr jaega pr node mai nhi
// // console.log(3+3); console.log("shraddha") dont write your code like this make it readable use next line
//  let name = "shraddha" //string ""
//  let age= 21 //number range(2^53) bigInt
// let isLoggedIn = false //boolean datatype

//null => standalone value and it is a object in js representation of empty value
//undefined =>variable declare kia h pr usko koi value nhi di
//symbol=> unique

// object
// console.log(typeof null) //object
// console.log(typeof undefined) //undefined
// comparison of datatypes

// console.log("2">1); true
// console.log("02">1); true
// note: in typescript we cant compare two different datatypes

// console.log(null>=0)  avoid such mess
// console.log(null>0)
// console.log(null==0) // null ko 0 mai convert krdia js ne
// console.log(undefined==0)
// console.log(undefined>=0)
// console.log(undefined<=0)
// console.log(undefined>0) sb false


//IMPORTANT
// strict check === sirf values nhi unke datatype ko bhi check krta hai
// console.log("2"===2) //will give false as output because its datatype is different

// DATATYPES SUMMARIZATION
// primitive datatypes(7): call by value not by reference (value ki copy ke saath deal krte h na ki address)
//String,Number,Boolean,Null,undefined,Symbol, BigInt


// **Point to be noted**:
// 🎀JavaScript is a Dynamically typed language🎀
// 💡In dynamically typed languages like JavaScript, you don't need to specify the data type when declaring a variable. 🏷️
// 💡A language is called statically typed when you must explicitly declare the data type of a variable when assigning a value to it. 
// For example, languages like Java or C++ are statically typed. 💻
// 💡In JavaScript, the type of a variable is determined at runtime and can even change during execution. 
// So, variables in JS are flexible and can hold different types of data at different times! 🌱



const score= 100
const scoreValue = 100.3; // This is also a number. In JavaScript, there’s no separate type for float or integer – both are treated as numbers.
const outsideTemp = null // datatype of outsideTemp is object
console.log(typeof outsideTemp) 
const isLoggedIn= false
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId)
// A symbol is a datatype that makes a value unique, even if the value appears to be the same. With the help of symbols, two values that look identical will be treated as different and unique.

const bigNumber = 2345678984567789n
// console.log(typeof bigNumber) ->bigInt

// 🐱‍🏍 Non-primitive: Reference (A reference is allocated in memory)
//array,Objects,Functions 

const heros = ["shaktiman","spideyboy","eren"] //array 
let myObj = { //objects
    name:"ssb",
    age : 32

}
const myFunction = function(){
console.log("hello earth")
}
 console.log(typeof myFunction) // return object function reference wale mai sbka type object hi aata hai

 //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 //stack(primitive/copy of the value ) & heap memory(non primitive/call by reference)
let myName = "shradha"
let anotherName = myName
anotherName = "shrads"
console.log(anotherName)
console.log(myName)

//non primitive heap memory 
let user1 = {
    //objects
    email:"user@google.com",
    upi: "user@ybl"
}
let user2 = user1
user2.email = "ssb$gmail.com"
console.log(user1.email,user2.email)
//dono change ho jaenge bcoz original address pe jo value thi wahi change hui hai

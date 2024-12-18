let score = 33//let score = "33abc" //let score = "33" type= string it will be converted into number
console.log(typeof score)
let valueInNumber = Number(score) //koi bhi data type ko aise class ke form mai use kr skte hain in js string ko bhi(first letter of datatype/class will always be capital)
console.log(valueInNumber) //output=>NaN not a number
// null ko 0 mai convert krdia undefined ko NaN
// BOOLEAN ko 1 <= true or 0<=false
//"33" = > 33
// "33abc" => NaN(is also a type of Number haha)
//true=>1;false=>0

let isLoggedIn= "ssb"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// 1=> true 
// ""empty string=> false "ssb" isme we'll get true as it is not empty
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

//🔮ParseInt🎀 

// The parseInt method parses a value as a string and returns the first integer.
// If the first character cannot be converted, NaN is returned.
// Leading and trailing spaces are ignored and First character (if it's an integer) is returned.

// Only the first integer found is returned.
// parseInt("10");OUTPUT= 10
// parseInt("10.00"); OUTPUT= 10
// parseInt("10.33"); OUTPUT= 10
// parseInt("34 45 66");OUTPUT= 34
// parseInt(" 60 ");  OUTPUT= 60
// parseInt("40 years"); OUTPUT= 40
// parseInt("He was 40"); OUTPUT= NaN
// 🎃parseInt("10+2");  OUTPUT = 10
// parseInt("7FM");  OUTPUT= 7
// 🎃parseInt("M7F");  OUTPUT= NaN

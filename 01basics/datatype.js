 "use strict"; // treat all js code as newer version
//  alert(3+3)  yeh browser mai console mai run kr jaega pr node mai nhi
// console.log(3+3); console.log("shraddha") dont write your code like this make it readable use next line
 let name = "shraddha" //string ""
 let age= 21 //number range(2^53) bigInt
let isLoggenIn = false //boolean datatype

//null => standalone value and it is a object in js/ representation of empty value
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
console.log("2"===2) //will give false as output bcoz datatype is different
const name = "shraddha"
const repoCount = "19"
// console.log(name + repoCount + " Value") avoid using such syntax
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
//🏮this is called string interpolation we use backticks and this syntax is more readable nd is widely used nowadays
//string declaration 
const gameName = new String("princessnura")
// so output would be a string princessnura and we will get key value pairs of each letter starting at position 0 ...it's not like array, array is a data structure whereas string is just an object
// console.log(typeof gameName) => we get object as output 
// console.log(gameName[2]) //=> output i
// console.log(gameName.length)
// console.log(gameName.toUpperCase()) //toUpperCase is a function
// console.log(gameName.charAt(7))
// console.log(gameName.indexOf('s')) //isme first s jo aaega uska index dega bs

const newString = gameName.substring(0,4) // 0-6 tk 7-1
// console.log(newString)
// const anotherString = gameName.slice(-7,4)
// console.log(anotherString)
const str1 = "   shradha     "
console.log(str1.trim()) // to remove spaces often we get input from forms in such manner
console.log(str1) 
const url = "https://shraddha.com/shraddha%20singh" //browser mai space  %20 mai convert ho jata h to remove this %20 we will
console.log(url.replace('%20','-'))//https://shraddha.com/shraddha-singh
console.log(url.includes('singh')) //if it includes singh or not output is true

const str2 = new String('shraddha-sb-rh')
console.log(str2.split('-')) //=>[ 'shraddha', 'sb', 'rh' ]
// jo separator use krenge space ho ya dash wahan se break hoke array bna lega

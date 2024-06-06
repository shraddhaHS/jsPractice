let myDate = new Date() //mydate is an object
// console.log(myDate) // not so readable output 2024-06-04T16:44:39.733Z
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())

// let myCreatedDate = new Date(2023,1,5) //YYYY/MM(0-11)/DD
let myCreatedDate = new Date("01-11-2024") //MM/DD/YYYY
// console.log(myCreatedDate.toDateString())
let timestamp = Date.now() //will give value from 1st jan 1970 in milliseconds
// to get timestamp in seconds math.floor(date.now()/1000)

// console.log(timestamp) 
// console.log(myCreatedDate.getTime())//will give value from 1st jan 1970 in milliseconds
let newDate = new Date('05-19-2024')
// console.log(newDate.getDay())
//tolocalestring onject so we can have many optionss default for international stnadard
// newDate.toLocaleString('default',{
//     weekday:"long"

// })
console.log(newDate.toLocaleString('default', { weekday: 'long', month: 'long', day: 'numeric' ,year:'numeric'}));

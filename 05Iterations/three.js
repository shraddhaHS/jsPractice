// ["","",""] string array 
// [{},{},{}] object array isme loops lgaenge ab

// const arr = [1,2,3,4,5]
// //forof
// for (const num of arr) {
//     console.log(num)
// }
// const greetings = "hello world!"
// for( const greet of greetings){
//     console.log(`each char is ${greet}`)
// }

// MAPS key value pairs ka collection
const map = new Map()
map.set('IN', "india")
map.set('USA', "United states of america")
map.set('NL', "netherland")
// map.set('NL', "netherland")  it wont get repeated as map has unique values in the same order 

// console.log(map)
//looping in map
for(const [key,value] of map){
console.log(key,":-",value) //isse key aur value ko separately extract krpaenge
    // console.log(key) //isse pura array form mai aa jaega key value
}
 

// with obbjects forof wont work to iterate
// const myObj = {
//     "game1": "NFS",
//     "game2":"GTA"
// }
// for (const [key,value] of myObj) {
//     console.log(key,":-", value) //myObj is not iterable
// }

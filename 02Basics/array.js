// const myArr = [0,1,2,3,4,5,6,true,'shraddha'] //different datatypes bhi add kr skte hain aur js mai resizable hota hai
const myArr = [0,1,2,3,4,5,6]
//  reference same hota h shallow copy bnti h js mai array ki 
// const myArr2 = new Array(2,5,3,6,3)
// console.log(myArr2[3])

// METHODS
// myArr.push(7)//last mai add krta hai
// myArr.pop() //last element ko hata dega
// myArr.unshift(0) //starting mai insert krta hai
// myArr.shift() //starting se remove krta hai reversse of pop
// console.log(myArr.includes(4)) //boolean answer
// console.log(myArr.indexOf(9)) //gives index & if the value doesnt exists it gives -1 as answer

// const newArr = myArr.join() //converts array to string separated by comma
// console.log(myArr)
// console.log(newArr) //output  -> 0,1,2,3,4,5,6
// console.log(typeof newArr) //string

//SLICE,SPLICE
// console.log("A", myArr)
// const myn1 = myArr.slice(1,3) //index 1,2 ki values wala array dega as output and original array will remaind the same
// console.log(myn1)

// console.log("B",myArr) //main array i unchanged after slice operation too

// const myn2 = myArr.splice(1,3)
// //splice will give output including 3rd index value too...but t will also modify the original array it will remove indexes 1-3 from the main array
// console.log(myn2) // [ 1, 2, 3 ]
// console.log("C",myArr) // C [ 0, 4, 5, 6 ]

//
const marvelHeros= ["thor","ironman" ,"spiderman"]
const dcHeros = ["superman","flash","batman"]
// marvelHeros.push(dcHeros) // isse pura array ek element bn gya na ki merge hua so array becomes a single element in main array
// const allHeros = marvelHeros.concat(dcHeros) //original array moodify nhi krta concat

// console.log(allHeros)
//spread operator
const all_new_heros = [...marvelHeros, ...dcHeros] //isse alg alg elements spread ho jaege array ke and ek array mai hume sb elements copied mil jaega
//concat se better h spread bcoz more than 2 arrays ko merge kr skte hain
console.log(all_new_heros)
const another_array = [1,2,3,[4,5,6],[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
//this flats out the entire array as right now it is hard to operate with such array as it has high depth so using flat we can change depth ...we keep depth as infinity to flatten out everything 
console.log(real_another_array) //output - >[ 1, 2, 3, 4, 5, 6, 6, 7, 4, 5]
console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh")) //array mai convert krdega [ 'h', 'i', 't', 'e', 's', 'h' ]

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)) // merge all the variables to form array

// function sayMyName(){
//     console.log("s")
//     console.log("h")
//     console.log("r")
//     console.log("a")
//     console.log("d")
//     console.log("h")
//     console.log("a")
// }
// sayMyName()

function addTwoNumbers(a,b){ //a,b are parameters in this function
   console.log(a+b) 
}
// addTwoNumbers(3,3) // jb parameters mai value rkhte h toh un values ko arguments bolte hain
// const result = addTwoNumbers(3,5) iSKa output result:undefined aaega as iss function ne bs print kia tha kutch return nhi kia tha 


function addTwoNumbers(a,b){ 
    // let result = a+b
    // return result
    return a+b
    console.log("shraddha") // return krnke baad ka code kbhi execute nhi hota
    
 }
 function loginUserMsg(username ){ //(username = "amy") yeh krdia toh undefined wala statement likhneki zarurat nhi pdegi
    if(!username){ //agr yeh nhi krna toh default parameter value dedo
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
 }
//  function loginUserMsg(username){
//     if(username=== undefined){
//         console.log("please eneter a username")
//         return
//     }
//     return `${username} just logged in`
//  }
//  console.log(loginUserMsg())

//rest ... operator same as spread bs usecase is different
function calculateCartValue(...num1){
    return num1
}
// console.log(calculateCartValue(200,400,500,2000))
const user = {
    username:"joe",
    price:"1989"
}
function handleObject(anyobject){
      console.log(`username is ${anyobject.username} and price is${anyobject.price}`)
}
// handleObject(user) //directly object daal skte h bina pehlese bnaye
// handleObject({
//     username:"rahul",
//     price:"2000"
// })

const myArr = [20,40,50,60,70]
function returnSecondValue(getarray){
    return getarray[1]
}
// console.log(returnSecondValue(myArr))
// or we can pass array directly just like we did with objects
// console.log(returnSecondValue([200,400,500,200,700]))

 
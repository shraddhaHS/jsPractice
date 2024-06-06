// let a =300 //global scope
// if(true){
//     let a = 10
//     const b = 20
//     // var c = 30
//     console.log(a) //local scope
// }
// console.log(a) //a print nhi hua bcoz local scope h uska globally call nhi kr skte
// console.log(b) global scope nhi h local rehta h const ka bhi
// console.log(c) isse print ho gya c yani global scope rehta h humesha so let use krna sahi nhi h iska koi scope nhi hota

// function one(){
//     const username = "shradha"
//     function two(){
//         const website = "youtbe"
//         console.log(username)
//     }
//     console.log(website) //website local variable hai global nhi so uss block ke bahr use nhi kr skte
//     two()
// }
// one()
// function one(){
//     const username = "shradha"
//     function two(){
//         const website = "youtbe"
//         console.log(username)
//     }
//     // console.log(website)
//     two()
// }
// one()

// if(true){
//     const username = "shradha"
//     if(username ==="shradha"){
//         const website = "  yt"
//         console.log(username + website)
//     }
//     // console.log(website) gave error as block ke bahar access kr rhe hain and it has local scope


// }
// console.log(username)

// *****************************************8
console.log(addone(5)) //isme pehle acces krpaenge
function addone(num){
    return num+1
}
// console.log(addone(5))
// addTwo() yeh pehle nhi likh skte kyunki variable mai stored h nd woh baadme initialise hua
const addTwo = function(num){
    return num+2
}
addTwo(5)
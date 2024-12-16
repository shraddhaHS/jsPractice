const user = {
    username:"sam",
    price:999,
    welcomeMessage : function(){
      console.log(`${this.username}, welcome to website`)  //this use kia h instead of just  username because current context mai dekh rhe hain 
     console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "amy"
// user.welcomeMessage()
// console.log(this) //empty as node pe run ho rha h browser mai window aata output

// function chai(){
//     let username = "rahul"
//     console.log(this.username) // (undefined)yahaan access nhi rkpaenge using this.username bs jb function ke andar object mai hi kr skte hain function mai nhi
// }
// chai()

//Arrow function
// const chai = ()=> {
//     let username = "shrad"
//     console.log(this.username) //undefined
//     console.log(this) //empty
// }
// chai()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
//OR
// const addTwo = (num1,num2) => num1 + num2 //implicit ek line ka statement h return likhne ki zarurat nhi hai
//OR
// const addTwo = (num1,num2) => (num1 + num2) //curly braces mai wrap kia toh return likhna hoga agr parenthesis mai kia toh nhi likna hoga
const addTwo = (num1,num2) => ({username:"shradha"})   //object ke liye bhi parenthesis mai rkhdenge toh algse return nhi krna khud ho jaega



console.log(addTwo(3,5))
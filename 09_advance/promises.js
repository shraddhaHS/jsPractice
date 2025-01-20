//promise object hai
//creating promises
// const promise1 = new Promise(function(resolve,reject){
//     //Do an Async task
//     //db calls, cryptography , network
//     setTimeout(function(){
//         console.log('async task is complete') 
//         resolve()
//     },1000)
// })
// // //resolve and then connected hain resolve function call kroge tbhi then wala execute hoga
// promise1.then(function(){
//     console.log("promise consumed")
// })
// //isse ek hi part mai complete krlenge pehle jis cheez ko alg alg do parts mai kia
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('async task 2 is complete') 
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("async 2 resolve")
// })
// //
// const promise3 = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve({username:"shraddha", email:"shradha@gmail.com"})
//     }, 1000);
// })
// promise3.then(function(data){
// console.log(data)
// })
// //
// const promise4 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username:"shraddha",password:"123"})
//         }else{
//             reject('error: something went wrong')
//         }
//     },1000)
// })
// promise4
// .then((user)=>{
//     console.log(user)
//     return user.username
// })
// .then((username)=>{console.log(username)})
// .catch(function(error){
//     console.log(error)
// })
// .finally(()=> console.log("the promise is either resolve or rejected"))

// //
const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"javascript",password:"123"})
        }else{
            reject('error: JS went wrong')
        }
    },1000)
})
// //async await error handle nhi krta toh try and catch use krte h catch is for error handling
// //another method instead of then finally catch
// async function consumedPromise5(){
//    try{
//     const response = await promise5
//     console.log(response)
//    }catch(error){
//     console.log(error)
//    }
// }
// consumedPromise5()

// //
// async function getAllUsers(){
   
//   try{ 
//     const response  = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json() //isme time lgta h isliye await krana pdega
//     console.log(data)}
//     catch(Error){
//         console.log("e:",Error)
//     }
    
// }
// getAllUsers()

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error) =>console.log(error))
 

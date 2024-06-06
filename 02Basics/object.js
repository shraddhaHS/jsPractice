 //object literals
//  jsuser is an object

 const mySym = Symbol("key1")
 const JsUser = {
    name:'shradha',
    "full name":"shradha singh", //this cant be accesses using jsuser.___ method
    age:18,
    [mySym]: "mykey1", //symbol ka syntax
    location:'rome',
    lastLoginDays:["monday","saturday"],
    email:"ssb@gmail.com"


 }

 //how to ACCESs
//  console.log(JsUser.email) //not right way pr most of the time yahi use krenge
//  console.log(JsUser["email"]) //better way
//  console.log(JsUser["full name"]) //yeh better h full name ke liye yahi work krega . krke krenge toh hoga nhi 
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

JsUser.email = "shradha@gmail.com" //override value
// Object.freeze(JsUser) //so that no one can change its value
JsUser.email = "xyzzzzz@gmail.com" //now we cant change it will show value of email before we freezed
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello Js user")
}
JsUser.greeting = function(){
    console.log("hello Js user")
}
JsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`)
}
console.log(JsUser.greeting2())
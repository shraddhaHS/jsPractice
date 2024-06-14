//literal object ..creating object form the base//declaring an object
const user = {
    username : "shradha",
    loginCount : 8,
    signedIn : true,
    getUserdetails : function(){
        // console.log("got user details ")
        // console.log(`username : ${this.username}`)
        console.log(this)
    }
}
// console.log(user.getUserdetails())

//constructor
// const promise1 = new Promise()
//new is constructor function

function User(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greet = function(){
  console.log(`welcome ${this.username}`)
    }   
    return this //yeh likhna zaruri nhi h woh return khud hoga hi
}

const user1 = new User('shreya',12,true)
const user2 = new User('sudo',3,false)
//constructor function har baar new instance deta hai function ka agr without new use krte hain toh jo const baadme define hoga woh  override krdega pehle wale ko
console.log(user2.constructor) 

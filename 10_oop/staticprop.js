class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username : ${this.username}`)
    }
     static createId(){
        return `123${this.username}`
    } // function not avilable for everyone
}
const shradha  = new User("shradha")
// console.log(shradha.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
        
    }
}
const iphone = new Teacher('iphone','dd@apple.com')
console.log(iphone.logMe());
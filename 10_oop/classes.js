//ES6

class User{
    constructor(username,email,pw){
        this.username = username;
        this.email = email;
        this.pw = pw;
    }
    encryptPassword(){
        return `${this.pw}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai = new User('chai',"chai@gmail",'123')
console.log(chai.encryptPassword())
console.log(chai.changeUsername())
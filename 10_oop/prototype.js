let myName = 'shradha'
// console.log(myName.length) output 7 when myName = 'shradha' but output is 11 when myName = 'shradha    '
// console.log(myName.trueLength) //new method

let myHeros = ["thor","spidey"]

let heroPower = {
    thor: "hammer",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}
Object.prototype.shradha = function(){
    console.log('i am everywhere')
}
// new prototype add ho gya saare objects ke liye
myHeros.shradha()
// heroPower.shradha()

Array.prototype.god = function(){
    console.log('i am god')
}
myHeros.god()
// heroPower.god()

//inheritance
const user = {
    name:'shradha',
    email:'nal@gmail.com'
}
const Teacher = {
    makeVideo:true
}
const teacherSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment:'js assignment',
    fulltime : true,
    __proto__: teacherSupport
}
Teacher.__proto__ = user

//modern syntax for inheritance
Object.setPrototypeOf(teacherSupport,Teacher)

let anotherUsername = "chaiaurcode     "
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length} `)
}
anotherUsername.trueLength()
"rahul".trueLength()
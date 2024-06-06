// const tinderUser = new Object()  singleton object hai
const tinderUser = {} //non singleton baaki sb same h output same aaega run krnepe
tinderUser.id = "123"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false


// console.log(tinderUser)
 const regularUser = {
    email:"ssb@gmail.com",
    fullname:{
        userfullname:{
            firstname:"shradha",
            lastname:"bhadoria"
        }
    }
 }
//  console.log(regularUser.fullname.userfullname.lastname) //nested values ko . . krte huye access krletehain
//  console.log(regularUser.fullname?.userfullname.lastname) //agr fullname exist krta h tbhi
//merging or combining objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"e", 6:"f"}
// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3)
const obj3 = {...obj1,...obj2,...obj4} //spread method easier
// console.log(obj3)

const users= [
    {id:1,
     name:'avx',   
     email:"sdn2mial"
    },
    {id:2,
     name:'avx',   
     email:"sdn2mial"
    },
    {id:3,
     name:'avx',   
     email:"sdn2mial"
    },
    {id:4,
     name:'avx',   
     email:"sdn2mial"
    }
]
// console.log(users[1].id)
// console.log(Object.keys(tinderUser)) //will give array of all the keys
// console.log(Object.values(tinderUser))//array of all the values
// console.log(Object.entries(tinderUser))//[ [ 'id', '123' ], [ 'name', 'sam' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // true

//object destructuring
 
const course = {
    coursename :"js in hindi",
    price:"399",
    teacher:"shradha"
}
// console.log(course.coursename)  iski jagah destructuring kr skte h to access
const {teacher} = course //or if we want to call by diff name instead of teacher then const {teacher: tutor} = course console.log(tutor)
console.log(teacher)

//API (json) 
//json have such objects written in following format
// {
//     "name":'lucy',
//     "courseName":"python",
//     "price":389
// }
//OR API HAVE DATA IN THI FORMAT TOO USING ARRAYS
[
    {},
    {},
    {}
]

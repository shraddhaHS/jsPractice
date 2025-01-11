const coding = ["js","rb","c++","python","java"]
//foreach
//callback function hoga uska naam nhi hota
// coding.forEach( function (item){
//     console.log(item)
// }   )
//using arrow callback function
// coding.forEach( (item) => { console.log(item)}  ) 

// function printMe(item){
//     console.log(item )
// }
// //using this function as callback
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=> {
//     console.log(item,index,arr)
// })
// js 0 [ 'js', 'rb', 'c++', 'python', 'java' ]
// rb 1 [ 'js', 'rb', 'c++', 'python', 'java' ]
// c++ 2 [ 'js', 'rb', 'c++', 'python', 'java' ]
// python 3 [ 'js', 'rb', 'c++', 'python', 'java' ]
// java 4 [ 'js', 'rb', 'c++', 'python', 'java' ]

// [{},{},{}]
const myCoding = [
    {
        languageName : "javascript",
        filename:"js"
    },
    {
        languageName : "java",
        filename:"java"
    },
    {
        languageName : "python",
        filename:"py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
    console.log(item.filename)
})
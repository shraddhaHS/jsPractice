const descripter= Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(Math.PI) can we override value of pi
console.log(descripter);
// output {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,       
//     configurable: false
//   }
const chai = {
    name:'ginger tea',
    price:25,
    isAvailable:true
}
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
// Object.defineProperty(chai,'name',{
//     writable:false,
//     enumerable:false
// })
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));


for(let [key,value] of Object.entries(chai)){
    console.log(`${key}: ${value}`);
}
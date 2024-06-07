//reduce method
const myNums = [1,2,3]
//cart totaling mai use hota
// const myTotal = myNums.reduce((acc,curVal) => {
//     console.log(`acc: ${acc} and current value is ${curVal}`)
//     return acc+curVal
// } ,0 )//0 acc ki value initialise krneke liye

//other way to write this code using arrow function in one line
const myTotal = myNums.reduce((acc,curr) => acc+curr,0)
// console.log(myTotal)

const shopCart = [
    {
        itemName: "js course",
        price: 5999
    },
    {
        itemName: "devops",
        price: 9999
    },
    {
        itemName: "python course",
        price: 999
    }
]
const priceToPay = shopCart.reduce((acc,item)=> acc +item.price ,0 )
console.log(priceToPay)
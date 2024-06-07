// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("best number")
//     }
//     console.log(element);
    

// }

// for(let i = 0; i<=10; i++){
//     // console.log(`outer loop value: ${i}`)
//     for(let j=0;j<=10 ;j++){
//         console.log(i + '*' + j + '='+ i*j )
// //   console.log(`inner loop value ${j} inner loop ${i} `)
//     }
// }
// let myArr = ["flash","batman","superman"]
// for(let i=0;i<myArr.length;i++){
//     const element = myArr[i]
//     console.log(element)
// }

//break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index==5){
//         console.log('detected 5')
//         break  //yahaan ruk jaega jb condition met kre toh for loop ke bahar
//     }
//     console.log(`value of i is ${index}`)
    
// }
for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log('detected 5')
        continue  //yahaan ruk jaega jb condition met kre toh for loop ke bahar
    }
    console.log(`value of i is ${index}`)
    
}
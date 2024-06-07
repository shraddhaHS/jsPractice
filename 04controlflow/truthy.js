 const userEmail = "shraddha@gmail.com"
 if(userEmail){ //useremail ki kutch value hai toh true maan lega 
    console.log("got user email")
 } else{
    console.log("dont have email")
 }

//falsy values
//  false , 0 , -0 , null , undefined , BigInt 0n , "" , NaN

// truthy values
// "0" , "false" , " " {as these strings are not empty isliye truthy h }
//[] , {} , function(){}

// nullish coalescing operator(??) : null undefined

let val1;
// val1 = 5 ?? 10 output 5
// val1 = null ?? 10 output 10 null ke alawa jo hoga woh aaega
// val1 = undefined ?? 15 output 15
// val1 = null??10??10  null ke baad jo first value milegi woh assign ho jaega

console.log(val1)

//terniary operator
// condition ? if true: if false

const icePrice = 100
 icePrice <= 80 ? console.log("less than 80") : console.log("more than 80")

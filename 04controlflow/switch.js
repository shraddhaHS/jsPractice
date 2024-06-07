// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// break causes the switch statement to end its execution immediately and to transfer control to the code after the switch statement's closing brace ( } ). This behavior can be used to match and ignore one or more cases in a switch statement.
// when BREAK is used the code below it wont  be executed once we get a output
const month = 3
switch(month){
    case 1:
        console.log("jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("mar")
       
    case 4:
        console.log("apr")
      
    default:
        console.log("doesnt match")
        break;
}

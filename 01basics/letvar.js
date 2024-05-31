const accountId = 1562
let accountEmail = "shradha@gmail.com"
var accountPassword = "12345"
accountCity = "texas"
let accountState;
// undefined variable 

// accountId= 2

// now we will run the code
// we get error as we tried changing value of a constant keyword o accountId=2 is not allowed it cant be changed because const keyword was used
accountEmail = "hsjd@ga"
accountCity="jaipur"
accountPassword="154435"
// console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
// all those 3 values were changed except const one we ued table to get answer in tabular pattern
 /*var and let are used for initialising variables in javascript
but the problem with var is that it doesnt have scope i.e if we change a variable defined using var at one place it will change its value everywhere in the code ..so there is no local scoping here*/
// so let should be used and variables can be defined without any keywords too in js

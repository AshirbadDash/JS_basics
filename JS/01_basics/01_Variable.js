console.log("Hello world"); 
const accountId = 1; 
console.log(accountId); // 1

// accountId = 2; // TypeError: Assignment to constant variable.
// accountId=2 const is constant value and cannot be changed
console.log(accountId);

let accountEmail = "ashirbadash2000@gmail.com"; //LET IS BLOCK SCOPE
console.log(accountEmail); //ashirbadash2000@gmail

// let accountEmail = "ash@gmail .com"; //SyntaxError: Identifier 'accountEmail' has already been declared
accountEmail = "ash@gmail .com";

console.log(accountEmail); // ash@gmail

{
  let accountEmail = "ashirbadash2000@gmail.com";
  var accountPassword = "12345";
  console.log(accountEmail); //ashirbadash2000@gmail
  console.log(accountPassword);
}
console.log(accountPassword);
var accountPassword = "123";
var accountPassword = "123"; //var is functional scope

console.log(accountPassword); 

var accountCity = "m";

var accountCity = "Bengaluru";

let accountState = "karnataka";

/*
Prefered not to use var because of issue in block scope and functional scope


*/
// accountId=2
accountCity = "bangalore";

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

console.log(accountId);


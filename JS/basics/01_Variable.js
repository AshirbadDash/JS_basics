console.log("Hello world");
const accountId = 1;
// accountId=2 const is constant value and cannot be changed
console.log(accountId);

let accountEmail = "ashirbadash2000@gmail.com"; //LET IS BLOCK SCOPE

accountEmail = "ash@gmail.com";

{
  let accountEmail = "ashirbadash2000@gmail.com";
  var accountPassword = "12345";
  console.log(accountPassword);
}
var accountPassword = "123";
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


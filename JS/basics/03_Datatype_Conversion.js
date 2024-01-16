let score = null;

console.log(typeof score); //Object
console.log(typeof score); //Object

let valueInNumber = Number(score); //capital format of datatypes
let input = "33";
/*
number "33"==>33
"33abc"==>nan
true ==>1; false=0
*/
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //0

let isLoggedIn = 1;
let BooleanisLoggedIn = Boolean(isLoggedIn);
console.log(typeof isLoggedIn);
console.log(BooleanisLoggedIn);
let a = "";
console.log(Boolean(a));
//1 ==>true
//0==>false
//""==>false
//"hitesh"==>true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

//33==>"33"

// ******************OPERATIONS **************************** //

let value = 3;
let negValue = -value;
// console.log(negValue)
let str1 = "ashirbad";
let str2 = " dash";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 1);
console.log(1 + "1");
console.log("1" + "1");
console.log("1" + 1 + 2);
console.log(1 + 1 + "2");

// console.log((3+4)*2)

console.log(+true);
console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

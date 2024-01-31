let score = null; 

console.log(typeof score); //Object
console.log(typeof (score)); //Object  //same as above line  //use brackets to avoid confusion in case of multiple operators 
    //example of multiple operators with brackets

console.log(typeof (score + 1)); //string
let input = "33";


let valueInNumber = Number(score); //capital format of datatypes(class based)
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //0

let x =undefined;
let cxc=Boolean(x); // false

let z= Number(x); //Nan
console.log(typeof z); //number

let big =1223344128123843583459n; //bigint
let big2 = Number(big); //   1223344 //truncation of big number  //loss of data  //not recommended    
console.log(big2); //1223344     
console.log(typeof big); //bigint

//***************NUMBER CONVERSIONS********************** */
//undefined if converted to number gives Nan
//null if converted to number gives 0
//boolean if converted to number gives 1(true) and 0(false)
//string if converted to number gives Nan
//bigint if converted to number gives truncation of big number
//symbol if converted to number gives error
//object if converted to number gives error
//function if converted to number gives error
//array if converted to number gives Nan
//date if converted to number gives Nan
//infinity if converted to number gives infinity


/*
null==>0 
number "33"==>33
"33abc"==>Nan
undefined==>Nan
true ==>1; false=0
*/
//***************BOOLEAN CONVERSIONS********************** */
//undefined if converted to boolean gives false
//null if converted to boolean gives false
//boolean if converted to boolean gives true and false
//string if converted to boolean gives true and false
//bigint if converted to boolean gives true and false
//symbol if converted to boolean gives true and false
//object if converted to boolean gives true and false
//function if converted to boolean gives true and false
//array if converted to boolean gives true and false
//date if converted to boolean gives true and false
//infinity if converted to boolean gives true and false




//typeOf nan==>number

//conversion of null to 


//***************STRING CONVERSIONS********************** */
//undefined if converted to string gives undefined
//null if converted to string gives null
//boolean if converted to string gives true and false
//string if converted to string gives same string
//bigint if converted to string gives same bigint
//symbol if converted to string gives error
//object if converted to string gives object
//function if converted to string gives function
//array if converted to string gives comma seperated string
//date if converted to string gives date



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


let somenull = String(null); //null
console.log(somenull); //null

let someUndefined = String(undefined); //undefined
console.log(someUndefined); //undefined





let someBoolean = String();  
console.log(someBoolean); //true

let someNumber = 33; //number
let stringNumber = String(someNumber);  // "33"
console.log(stringNumber); // "33"
console.log(typeof stringNumber); //string

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

console.log(+true); // the unary + operator can be used to convert a string to a number
console.log(+"");//0

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter; //PRE UNCREMENT 
console.log(gameCounter);

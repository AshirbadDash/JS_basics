//primitive
//call by value and call by reference

// 7 types :  (call by value means they are copied ad given not the memory address)

//String ,Number,Boolean,null(empty),undefined(not initialized),Symbol,BigInt

//Reference (non-pirmitive)

//Array,Objects,Functions

//Javascript is a dynmically typed language

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 34567898765435678n;

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "ashirbad",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof bigNumber);

/*
undefined --> undefined
Null -->object
Boolean -->boolean
Number -->number
String -->string
Object -->object
Object -->function
Object -->implementation definde may not be undefined,boolean,number,string
*/

//function returns function only and it is called objectfunction
// all non-primitive return type is object

//object return type is function



/* ************************ MEMORY ****************** */

//stack --all primitive type(copy is returned)

//heap --all non-primitive type(reference of original value is returned)


let myYoutubename="ashirbad"

let anotherName=myYoutubename
anotherName="ash"

console.log(myYoutubename);
console.log(anotherName);

let userOne={
    name:"ash",
    id:1,
    email:"ash@gmail.com"
}

let userTwo=userOne

userTwo.id=2

console.log(userOne) //original value is changed
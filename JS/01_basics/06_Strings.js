const name = "ash";

const repoCount = 50;

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //StringInterpolation we can add functions inside {}
//also called as template literals //backticks are used templating

const gameName = new String("ashirbad-dash"); //object

//string is a object it is stored as keyvalue pairs

console.log(gameName[0]); // a //indexing can be done 
console.log(gameName.__proto__); //to see the object {prototype can be acessed}

//String is an object

console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(1));
console.log(gameName.indexOf("d"));

const newString = gameName.substring(0, 2);
console.log(newString);

const anotherName = gameName.slice(-8, 4); //giving negative value will start it from reverse can be used only in slice

gameName.trim();

//======================== String methods =======================//

a = 10;

b = null;

// console table
let z;

//Strings
let j = "javajava";

console.table({
  a: a,
  z: z,
  b: b,
  typeof_a: typeof a,
  typeof_b: typeof b,
  typeof_j: typeof j,
  typeof_z: typeof z,
});

let t = " trim";
// console.log(t.trim()); //removes the spaces
// console.log(t.charAt(2)); //returns the character at the index
// console.log(t.concat(j));//concatenates the string  
// console.log(t.indexOf('t')); //returns the index of the character 
// console.log(t.lastIndexOf('a')); //returns the last index of the character
// console.log(t.lastIndexOf('trim')); //returns the last index of the character
// console.log(t.toUpperCase()); //converts to uppercase
// console.log(t.toLowerCase()); //converts to lowercase
// console.log(t.substring()); //returns the substring
// console.log(t.toString()); //converts to string
// console.log(t.slice(1,3)); //returns the sliced string

let results = [
  { operation: "trim", result: t.trim() },
  { operation: "charAt", result: t.charAt(2) },
  { operation: "concat", result: t.concat(j) },
  { operation: "indexOf", result: t.indexOf(t) },
  { operation: "lastIndexOf", result: j.lastIndexOf("java") },
  { operation: "toUpperCase", result: t.toUpperCase() },
  { operation: "toLowerCase", result: t.toLowerCase() },
  { operation: "substring", result: t.substring(2, 3) },
  { operation: "toString", result: t.toString() },
  { operation: "slice", result: t.slice(3, 4) },
];

console.table(results);

console.log("false" == false);
console.log("false" === false);


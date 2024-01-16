const name = "ash";

const repoCount = 50;

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //StringInterpolation we ca add functions inside {}

const gameName = new String('ashirbad-dash')

console.log(gameName[0]); 
console.log(gameName.__proto__);  //to see the object

//String is an object


console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(1));
console.log(gameName.indexOf('d'));

const newString =gameName.substring(0,2)
console.log(newString);

const anotherName =gameName.slice(-8,4) //giving negative value will start it from reverse can be used only in slice

gameName.trim();










const score =400;

console.log(score);

const balance =new Number(100);//exponentially declaring the type 

console.log(balance);
console.log(balance.toString().length);

console.log(balance.toFixed(2));//to make the precison value fixed

const otherNumber =23.8966
console.log(otherNumber.toPrecision(3)); //round off to 3 values

const newNumber=123.8966
console.log(newNumber.toPrecision(3));//124 

const hundreds =1000000
console.log(hundreds.toLocaleString()); //1,000,000 default us standard
console.log(hundreds.toLocaleString('en-IN'));  //indian stadard

Number.MIN_VALUE; //tells the minum value it can have
Number.MAX_VALUE; //tells the max value 
Number.MAX_SAFE_INTEGER; //tells the max safe value

//++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++//
// console.log(Math); //object with properties
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.3)); //4
// console.log(Math.ceil(4.2)); //5 
// console.log(Math.floor(4.9)); //4
// console.log(Math.sqrt(25)); 
// console.log(Math.pow(2));
// console.log(Math.min(2,3,5,8));
// console.log(Math.max(2,3,5,9));

console.log(Math.random()); //RANDOM values always between 0-1
console.log((Math.random()*10)+1); //to avoid getting 0


const min=10;
const max=20;

console.log(Math.floor(Math.random() *(max-min+1))+min);










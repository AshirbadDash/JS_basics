// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

console.log("2" > 1); //comparison will convert to number
console.log("02" > 1); //comparison is not predictable we should compare same
//  datatypes

console.log(null > 0);
console.log(null == 0);

console.log(null >= 0); //null is converted to 0

console.log(undefined > 0);//undefined always gives false
console.log(undefined == 0);//undefined always gives false
console.log(undefined < 0);//undefined always gives false

console.log("2" == 2); //converts to number
console.log("2" === 2); //datatype check


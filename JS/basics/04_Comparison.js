// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

//comparing different datatypes

console.log("2" > 1); //comparison will convert to number
console.log("02" > 1); //comparison is not predictable we should compar same datatypes

console.log(null > 0); //null is empty {}
console.log(null == 0);

console.log(null >= 0); //null is converted to 0 

/*
The reason is that an equality check == and comparisons > <>=
<= work differently.
comparisons convert null to a number,treating it as 0.
That's why (3) null >=0 is true and (1) null >0 is false.
*/

console.log(undefined > 0); //undefined always gives false 
console.log(undefined == 0); //undefined always gives false
console.log(undefined < 0); //undefined always gives false

console.log("2" == 2); //converts to number
console.log("2" === 2); //datatype check {strict check-check values and also datatypes}

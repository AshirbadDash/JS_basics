const marvel_heros =["Thor,Ironman,Spiderman,Hulk,Captain America"]

const dc_heros=["Batman,Superman,Flash,Green Lantern"]

marvel_heros.push(dc_heros)
console.log(marvel_heros) //["Thor,Ironman,Spiderman,Hulk,Captain America",["Batman,Superman,Flash,Green Lantern"]]

const all_heros=marvel_heros.concat(dc_heros);
console.log(marvel_heros) //["Thor,Ironman,Spiderman,Hulk,Captain America",["Batman,Superman,Flash,Green Lantern"]]

console.log(all_heros) //["Thor,Ironman,Spiderman,Hulk,Captain America","Batman,Superman,Flash,Green Lantern"]);


//spread operator
const all_heros2=[...marvel_heros,...dc_heros]

const another_array=[1,2,3,[4,5,6],,7,[6,7,2],[6,7,[4,5]]];

const real_another_array= another_array.flat(Infinity)
console.log(real_another_array) //[1,2,3,4,5,6,7,6,7,2,6,7,4,5];

Array.isArray(real_another_array) //true
Array.isArray(Array.from("ashirbad")) 

console.log(Array.from({name:"ashirbad"})) //Intresting
//[]; if we dont provide any argument then it will return empty array

  //Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.


//Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

console.log(Array.of(1,2,3,4,5,6,7,8,9,10)) //[1,2,3,4,5,6,7,8,9,10]







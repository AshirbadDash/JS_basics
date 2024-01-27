//arrays
//Array is an object datatype in which we can store collection of elements 
const myArray = [0,1,2,3,4,5]; //array is created using curly braces
//Arrays are resizable and can contain a mix of differennt datatypes
const myArray2=["shaktiman","naagraj"]

let myArray3=[1,3,'shaktiman',true,undefined,null,NaN,myArray2] 


//accessing array elements
console.log(myArray[0]) //0
console.log(myArray[1]) //1
//Arrays are zero indexed

//Array always make shallow copy--(of an object is a copy whose property share a same reference point)

const arr1=[1,2,3,4,5,6,7,8,9,10]
const arr2=arr1
arr2[0]=100
console.log(arr1) //[100,2,3,4,5,6,7,8,9,10]

//deepcopy --property do not share the same reference point

const arrys=[1,2,3,4,5,6,7,8,9,10]
const arrys2=[...arr1]
arrys2[0]=100
console.log(arrys) //[1,2,3,4,5,6,7,8,9,10]

const arr3=new Array(1,2,3,4,5,6,7,8,9,10)


//array functions /methods

//push() --add element at the end of the array
arr1.push(11)
console.log(arr1) //[1,2,3,4,5,6,7,8,9,10,11]

//pop() --remove element from the end of the array
arr1.pop()
console.log(arr1) //[1,2,3,4,5,6,7,8,9,10]

//unshift() --add element at the beginning of the array
arr1.unshift(0)
console.log(arr1) //[0,1,2,3,4,5,6,7,8,9,10]

//shift() --remove element from the beginning of the array
arr1.shift()
console.log(arr1) //[1,2,3,4,5,6,7,8,9,10]


// includes() --check if the element is present in the array or not
console.log(myArray2.includes("shaktiman")) //true;


//indexOf() --return the index of the element
console.log(myArray2.indexOf("shaktiman")) //0
//if the element is not present in the array it will return -1


//join() --convert array into string

// console.log(myArray2.join(" ")) //shaktiman naagraj
// console.log(myArray2.join("")) //shaktimannaagraj
// console.log(myArray2.join()) //shaktiman,naagraj


//slice() --return the copy of the array
console.log(myArray2.slice()) //["shaktiman","naagraj"]
console.log(myArray2.slice(1)) //["naagraj"]
console.log(myArray2.slice(0,1)) //["shaktiman"] --start index is inclusive and end index is exclusive


//splice() --add or remove element from the middle of the array
arr1.splice(2,0,1.5) //add 1.5 at index 2
console.log(arr1) //[1,2,1.5,3,4,5,6,7,8,9,10]
arr1.splice(2,1) //remove 1 element from index 2
console.log(arr1) //[1,2,3,4,5,6,7,8,9,10]







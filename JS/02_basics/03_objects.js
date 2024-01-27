//singleton object --object with only one instance

// Object.create() --using constructor function we can create object and this is singleton object

//object literals
const mysymbol=Symbol("my symbol")
const jsUser= { 
    name:"ashirbad",
    age:24,
    address:"bangalore",
    hobbies:["coding","reading","gaming","travelling"],
    "is Married":false,
    0:"zero",
    [mysymbol]:"my symbol",
    sayHello:function(){
        console.log("hello world")
    },
    sayHi:function(){
        console.log("hi world")
    },}

    // console.log(jsUser.name)

// console.log(jsUser["name"]); // internally it will convert into string

// console.log(jsUser[0]); //zero

// console.log(jsUser["is Married"]); //cannot use dot notation

// console.log(jsUser[mysymbol]); //my symbol

jsUser.age=25
// Object.freeze(jsUser) //freeze the object --we cannot add or delete or update the object

jsUser.greeting =function(){
    console.log("hello jsUser")
}   //we cannot add new property to the object
//function can be stored in a variable  

jsUser.greeting2 =function(){
    console.log(`hello jsUser ${this.name} `)
}   


console.log(jsUser.greeting); //undefined
console.log(jsUser.greeting()); //hello jsUser

